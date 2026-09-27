
const LAST_QUESTION = 5;
var selectedIndexes = [];
var questionIndex = undefined;
var selectedAnswers = [null, null, null, null, null];


const startTest = () => {
  selectedIndexes = [];
  let count = 0;
  while (count < LAST_QUESTION) {
    let number = null;
    do {
      number = Math.floor(Math.random() * 50);
    } while (selectedIndexes.includes(number));
    selectedIndexes.push(number);
    count++;
  }

const workerCode = `
  self.onmessage = function(event) {
    const questionsSubset = event.data;
    const results = questionsSubset.map(question => {
      return { id: question.id, processed: true }; 
    });
    self.postMessage(results);
  };
`;
const workerBlob = new Blob([workerCode], { type: 'application/javascript' });
const workerUrl = URL.createObjectURL(workerBlob);

const runParallelAlgorithm = async () => {
  const questionsPerWorker = Math.ceil(questions.length / navigator.hardwareConcurrency);
  const workers = [];
  let startIndex = 0;
  let endIndex = questionsPerWorker;
  for (let i = 0; i < navigator.hardwareConcurrency; i++) {
    const subset = questions.slice(startIndex, endIndex);
    const worker = new Worker(workerUrl);
    workers.push(processQuestionsSubset(worker, subset));
    startIndex = endIndex;
    endIndex = Math.min(endIndex + questionsPerWorker, questions.length);
  }
  const results = await Promise.all(workers);
  console.log(results);
};

const processQuestionsSubset = (worker, questionsSubset) => {
  return new Promise((resolve, reject) => {
    worker.postMessage(questionsSubset);
    worker.onmessage = (event) => {
      resolve(event.data);
      worker.terminate(); 
    };
    worker.onerror = (error) => {
      reject(error);
    };
  });
};
runParallelAlgorithm();


  questionIndex = 0;
  let questionObj = questions[selectedIndexes[questionIndex]];

  displayQuestion(questionObj);

  document.getElementById("counter").innerHTML = questionIndex + 1;

  document.getElementById("next").style.pointerEvents = "none";
  document.getElementById("next").style.color = "gray";

  document.getElementById("previous").style.pointerEvents = "none";
  document.getElementById("previous").style.color = "gray";

  document.getElementsByClassName("welcome")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "flex";

  document.getElementById("test-result").style.display = "none";

  document.getElementById("restart").style.display = "none";

  document.getElementsByClassName("your-answers")[0].style.display = "none";
};

const resetPreviousStyles = () => {
  document.getElementById("div-ans-a").style.border = "none";
  document.getElementById("div-ans-b").style.border = "none";
  document.getElementById("div-ans-c").style.border = "none";
  document.getElementById("div-ans-d").style.border = "none";
};

const displaySelectedAnswer = (answer) => {
  if (answer === 0) {
    document.getElementById("div-ans-a").style.border = "3px solid black";
  } else if (answer === 1) {
    document.getElementById("div-ans-b").style.border = "3px solid black";
  } else if (answer === 2) {
    document.getElementById("div-ans-c").style.border = "3px solid black";
  } else {
    document.getElementById("div-ans-d").style.border = "3px solid black";
  }
};

const displayQuestion = (questionObj) => {
  document.getElementById("question").innerHTML = questionObj.question;
  document.getElementById("ans-a").innerHTML = questionObj.answers[0].text;
  document.getElementById("ans-b").innerHTML = questionObj.answers[1].text;
  document.getElementById("ans-c").innerHTML = questionObj.answers[2].text;
  document.getElementById("ans-d").innerHTML = questionObj.answers[3].text;

  if (questionIndex > 0) {
    document.getElementById("previous").style.pointerEvents = "auto";
    document.getElementById("previous").style.color = "black";
  } else {
    document.getElementById("previous").style.pointerEvents = "none";
    document.getElementById("previous").style.color = "gray";
  }

  if (selectedAnswers[questionIndex] !== null) {
    document.getElementById("next").style.pointerEvents = "auto";
    document.getElementById("next").style.color = "black";
  } else {
    document.getElementById("next").style.pointerEvents = "none";
    document.getElementById("next").style.color = "gray";
  }


  if (questionIndex === LAST_QUESTION - 1) {
    document.getElementById("next").innerHTML = "Final";
  } else {
    document.getElementById("next").innerHTML = "Întrebarea următoare >";
  }
};

const nextQuestion = () => {
  if (questionIndex < selectedIndexes.length - 1) {
    questionIndex++;
    let questionObj = questions[selectedIndexes[questionIndex]];

    resetPreviousStyles();

    displayQuestion(questionObj);

    if (selectedAnswers[questionIndex] !== null) {
      let answer = selectedAnswers[questionIndex];
      displaySelectedAnswer(answer);
    }

    document.getElementById("counter").innerHTML = questionIndex + 1;
  } else {
    showAllQuestionAndAnswer();
  }
};

const previousQuestion = () => {
  console.log(questionIndex);
  if (questionIndex > 0) {
    questionIndex--;

    let questionObj = questions[selectedIndexes[questionIndex]];

    resetPreviousStyles();

    displayQuestion(questionObj);

    document.getElementById("counter").innerHTML = questionIndex + 1;

    let answer = selectedAnswers[questionIndex];
    displaySelectedAnswer(answer);
  }
};

const selectedAnswer = (ans) => {
  resetPreviousStyles();

  displaySelectedAnswer(ans);

  document.getElementById("next").style.pointerEvents = "auto";
  document.getElementById("next").style.color = "black";

  selectedAnswers[questionIndex] = ans;
};

const showElement = (questionObj, chosenAnswer, index) => {
  let selectedAnswerIndex = chosenAnswer; 

  let element = `
    <div id="question-count">Întrebarea <span id="counter">${index}/${LAST_QUESTION}</span></div>
    <div id="question">${questionObj.question}</div>
    <div style="margin-bottom: 30px;"></div>
    <div class="ans" id="div-ans-a" ${selectedAnswerIndex === 0 ? 'style="border: 2px solid black;"' : 'style="display: none;"'}>
      <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
    </div>
    <div style="margin-bottom: 30px;"></div>
    <div class="ans" id="div-ans-b" ${selectedAnswerIndex === 1 ? 'style="border: 2px solid black;"' : 'style="display: none;"'}>
      <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
    </div>
    <div style="margin-bottom: 30px;"></div>
    <div class="ans" id="div-ans-c" ${selectedAnswerIndex === 2 ? 'style="border: 2px solid black;"' : 'style="display: none;"'}>
      <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
    </div>
    <div style="margin-bottom: 30px;"></div>
    <div class="ans" id="div-ans-d" ${selectedAnswerIndex === 3 ? 'style="border: 2px solid black;"' : 'style="display: none;"'}>
      <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
    </div>
    <div style="margin-bottom: 30px;"></div>
  `;
  return element;
};


const showAllQuestionAndAnswer = () => {
  let introvertCount = 0;
  let extrovertCount = 0;

  for (let i = 0; i < selectedIndexes.length; i++) {
    let questionObj = questions[selectedIndexes[i]];
    let answer = selectedAnswers[i];
    let element = showElement(questionObj, answer, i + 1);
    document.getElementById("answers").innerHTML += element;

    let cat = questionObj.answers[answer].cat;
    if (cat === "introvert") {
      introvertCount++;
    } else {
      extrovertCount++;
    }
  }

  
let population = [];

const generateRandomIndividual = () => {
  const introvertCount = Math.floor(Math.random() * 50); 
  const extrovertCount = 100 - introvertCount; 
  return { introvertCount, extrovertCount };
};

const initializePopulation = (populationSize) => {
  for (let i = 0; i < populationSize; i++) {
    population.push(generateRandomIndividual());
  }
};

const calculateFitness = (individual) => {
  const idealBalance = 100; 
  const introvertFitness = Math.abs(individual.introvertCount - idealBalance);
  const extrovertFitness = Math.abs(individual.extrovertCount - idealBalance);
  return introvertFitness + extrovertFitness;
};

const selection = () => {
  const index1 = Math.floor(Math.random() * population.length);
  const index2 = Math.floor(Math.random() * population.length);
  return population[index1].fitness < population[index2].fitness ? population[index1] : population[index2];
};

const crossover = (parent1, parent2) => {
  const introvertCount = Math.random() < 0.5 ? parent1.introvertCount : parent2.introvertCount;
  const extrovertCount = Math.random() < 0.5 ? parent1.extrovertCount : parent2.extrovertCount;
  return { introvertCount, extrovertCount };
};

const mutation = (individual) => {
  if (Math.random() < 0.2) { 
    const traitToMutate = Math.random() < 0.5 ? 'introvertCount' : 'extrovertCount';
    individual[traitToMutate] += Math.random() < 0.5 ? 1 : -1; 
    individual[traitToMutate] = Math.max(0, Math.min(100, individual[traitToMutate]));
  }
  return individual;
};

const runGeneticAlgorithm = (generations) => {
  initializePopulation(100);

  for (let i = 0; i < generations; i++) {
    population.forEach(individual => {
      individual.fitness = calculateFitness(individual);
    });

    const parent1 = selection();
    const parent2 = selection();
    let child = crossover(parent1, parent2);

    child = mutation(child);

    const indexToReplace = Math.floor(Math.random() * population.length);
    if (child.fitness < population[indexToReplace].fitness) {
      population[indexToReplace] = child;
    }
  }

  const bestIndividual = population.reduce((best, current) => best.fitness < current.fitness ? best : current);
  const { introvertPercentage, extrovertPercentage } = calculatePercentage(bestIndividual.introvertCount, bestIndividual.extrovertCount);
  displayPercentage(introvertPercentage, extrovertPercentage);
};

const calculatePercentage = (introvertCount, extrovertCount) => {
  const total = introvertCount + extrovertCount;
  const introvertPercentage = (introvertCount / total) * 100;
  const extrovertPercentage = (extrovertCount / total) * 100;
  return { introvertPercentage, extrovertPercentage };
};

const displayPercentage = (introvertPercentage, extrovertPercentage) => {
  const introvertElement = document.createElement("p");
  introvertElement.innerText = `Procentajul introvertiților: ${introvertPercentage.toFixed(2)}%`;
  document.getElementById("test-result").appendChild(introvertElement);

  const extrovertElement = document.createElement("p");
  extrovertElement.innerText = `Procentajul extrovertiților: ${extrovertPercentage.toFixed(2)}%`;
  document.getElementById("test-result").appendChild(extrovertElement);
};

runGeneticAlgorithm(100);


  showPersonalities(introvertCount, extrovertCount);

  document.getElementById("next").style.display = "none";
  document.getElementById("previous").style.display = "none";
};

const showPersonalities = (introvert, extrovert) => {

  const total = introvert + extrovert;
  const introvertPercentage = (introvert / total) * 100;
  const extrovertPercentage = (extrovert / total) * 100;

  if (introvertPercentage > extrovertPercentage) {

    document.getElementById("image").src = "photos/Introvert.jpg";
    document.getElementById("trait-title").innerText = "Ești un introvertit";


    let element = `<li>Ai nevoie de mult timp pentru tine însuți</li>
    <li>Prea multă socializare te epuizează</li>
    <li>Îți este greu să suporți conflictele</li>
    <li>Lucrezi mai bine pe cont propriu</li>
    <li>Lumina reflectoarelor nu te atrage</li>
    <li>Preferi un cerc restrâns de prieteni</li>
    <li>Ajungi să cunoști oamenii la un nivel mai profund</li>
    <li>Te distanțezi pentru a te îndepărta</li>
    <li>Preferi să scrii în loc să vorbești</li>
    <li>Petreci mult timp absorbit în propriile gânduri</li>`;
    document.getElementById("personalities").innerHTML += element;
    document.getElementById("personality-message").innerText = " ! Fiți mândri de calitățile voastre intelectuale și creativitate. Încercați să vă dezvoltați abilitățile de comunicare și să vă exprimați mai des ideile și opiniile.";
  } else {

    document.getElementById("image").src = "photos/Extrovert.jpg";
    document.getElementById("trait-title").innerText = "Ești un extrovertit";

    let element = `<li>Îți face plăcere să lucrezi în echipă</li>
    <li>Preferi să vorbești atunci când ai o problemă</li>
    <li>Nu îți place să petreci timp singur</li>
    <li>Îți place să fii în centrul atenției</li>
    <li>Îți iei energia atunci când ești în preajma altor oameni</li>
    <li>Îți place să lucrezi în echipă, în medii dinamice</li>
    <li>Ai un cerc larg de prieteni</li>
    <li>Iei decizii rapid</li>`;
    document.getElementById("personalities").innerHTML += element;

    document.getElementById("personality-message").innerText = " ! Încercați să fiți mai rezervați în anumite situații și să lăsați și altora ocazia de a-și exprima ideile. Ascultați cu atenție și oferiți sprijin celor din jur.";
  }

  
  document.getElementById("test-result").style.display = "flex";
  document.getElementById("restart").style.display = "block";
  document.getElementsByClassName("your-answers")[0].style.display = "block";
};

const restartQuestion = () => {
  window.location.reload();
  showPersonalities(introvertCount, extrovertCount);
};
