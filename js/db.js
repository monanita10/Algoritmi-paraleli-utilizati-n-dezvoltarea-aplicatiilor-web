const questions = [
  {
    id: 1,
    question:
      "Cum reacționezi în situații de stres sau presiune?",
    answers: [
      {text: "Preferi să te retragi pentru a-ți regăsi liniștea și claritatea mentală.", cat: "introvert"},
      {text: "Te implici activ și încerci să rezolvi problemele imediat.", cat: "extrovert"},
      {text: "Încerci să păstrezi un echilibru între a face față situației și a-ți păstra calmul.", cat: "introvert"},
      {text: "Te simți motivat și energizat de provocările și presiunea situațiilor dificile.", cat: "extrovert"},
    ],
  },
  {
    id: 2,
    question:
      "Cum te simți când ești singur timp îndelungat?",
    answers: [
      {text: "Te simți bine și te bucuri de timpul pentru tine.", cat: "introvert"},
      {text: "Devii neliniștit și îți place să ai mereu companie.", cat: "extrovert"},
      {text: "Îți place să te relaxezi singur, dar apreciezi și interacțiunile sociale foarte ocazionale.", cat: "introvert"},
      {text: "Te simți plictisit și începi să cauți activități sociale pentru a te distra.", cat: "extrovert"},
    ],
  },
  {
    id: 3,
    question:
      "Cum te simți într-un grup social unde nu cunoști pe nimeni?",
    answers: [
      {text: "Te simți puțin inconfortabil și preferi să rămâi mai rezervat la început.", cat: "introvert"},
      {text: "Îți faci ușor prieteni și te simți în largul tău în orice situație socială.", cat: "extrovert"},
      {text: "Îți place să observi din umbră și să te asiguri că înțelegi dinamicile grupului înainte să te implici.", cat: "introvert"},
      {text: "Ești entuziasmat și îți place să te implici imediat, încercând să faci noi conexiuni.", cat: "extrovert"},
    ],
  },
  {
    id: 4,
    question: "Cum reacționezi când cineva te invită să ieșiți în oraș într-o seară?",
    answers: [
      {text: "Îți face plăcere, dar preferi întâlnirile mai mici și mai intime.", cat: "introvert"},
      {text: "Ești încântat și îți place să ieși și să te distrezi cu cât mai mulți oameni posibil.", cat: "extrovert"},
      {text: "Îți place ideea, dar preferi să știi exact ce activități veți face înainte să te decizi.", cat: "introvert"},
      {text: "Ești gata de orice și îți place spontaneitatea și aventura.", cat: "extrovert"},
    ],
  },
  {
    id: 5,
    question:
      "Cum te descrii în situațiile noi sau cu persoane pe care nu le-ai întâlnit anterior?",
    answers: [
      {text: "Îmi ia ceva timp să mă acomodez, dar apoi devin confortabil.", cat: "introvert"},
      {text: "Sunt deschis și mă simt confortabil în aceste situații.", cat: "extrovert"},
      {text: "Mă simt extrem de timid și inconfortabil.", cat: "introvert"},
      {text: "Sunt rezervat și prefer să observ mai întâi.", cat: "introvert"},
    ],
  },
  {
    id: 6,
    question:
      "Cum îți petreci weekendurile in mod obișnuit?",
    answers: [
      {text: "Îmi rezerv timp pentru prieteni și familie, dar îmi place și timpul pentru mine.", cat: "introvert"},
      {text: "Particip la diverse evenimente sociale și activități în oraș.", cat: "extrovert"},
      {text: "Prefer să stau acasă și să mă relaxez într-un mediu familiar.", cat: "introvert"},
      {text: "Prefer să mă plimb în cât mai multe locuri, cu cât mai mulți oameni.", cat: "extrovert"},
    ],
  },
  {
    id: 7,
    question: "Ce fel de conversații preferi?",
    answers: [
      {text: "Conversații cu grupuri mici de oameni într-un cadru relaxat.", cat: "introvert"},
      {text: "Conversații animate și agitate, cu mulți participanți.", cat: "extrovert"},
      {text: "Conversații în care vorbesc foarte mult despre mine.", cat: "extrovert"},
      {text: "Conversații în care pot asculta mai mult decât să vorbesc.", cat: "introvert"},
    ],
  },
  {
    id: 8,
    question:
      "Cum te simți în legătură cu prezentările sau discursurile în public?",
    answers: [
      {text: "Le evit în general și prefer să stau în spatele scenei.", cat: "introvert"},
      {text: "Îmi place să fiu în centrul atenției și să vorbesc în fața unui public.", cat: "extrovert"},
      {text: "Pot să mă descurc într-un context mai restrâns, dar evit să vorbesc în fața unei mulțimi mari.", cat: "introvert"},
      {text: "Îmi place să împărtășesc ideile mele și să interacționez cu publicul.", cat: "extrovert"},
    ],
  },
  {
    id: 9,
    question:
      "Cum îți descrii stilul de lucru?",
    answers: [
      {text: "Prefer să lucrez independent și să-mi gestionez singur timpul.", cat: "introvert"},
      {text: "Îmi place să lucrez în echipă și să fiu în mijlocul acțiunii.", cat: "extrovert"},
      {text: "Am nevoie de momente singur pentru a-mi concentra gândurile și pentru a produce ceva de calitate.", cat: "introvert"},
      {text: "Îmi place să colaborez cu alții și să împărtășesc idei pentru a ajunge la soluții creative.", cat: "extrovert"},
    ],
  },
  {
    id: 10,
    question:
      "Ce te motivează cel mai mult în viață?",
    answers: [
      {text: "Realizările personale și progresul interior.", cat: "introvert"},
      {text: "Recunoașterea și aprecierea din partea celor din jur.", cat: "extrovert"},
      {text: "Explorarea și descoperirea unor noi pasiuni sau interese.",cat: "introvert"},
      {text: "Interacțiunea și conexiunea cu ceilalți.", cat: "extrovert"},
    ],
  },
  {
    id: 11,
    question: "Cum preferi să îți petreci timpul liber după o zi lungă de muncă?",
    answers: [
      { text: "Îți place să te relaxezi acasă cu o carte sau un film.", cat: "introvert" },
      { text: "Îți place să ieși cu prietenii și să socializezi.", cat: "extrovert" },
      { text: "Îți place să faci activități relaxante singur, precum yoga sau meditație.", cat: "introvert" },
      { text: "Îți place să participi la evenimente sociale sau să faci sporturi de echipă.", cat: "extrovert" },
    ],
  },
  {
    id: 12,
    question: "Cum te simți în timpul unei vacanțe lungi?",
    answers: [
      { text: "Te bucuri de timpul petrecut în liniște și de explorarea individuală.", cat: "introvert" },
      { text: "Preferi să ai activități planificate și să fii înconjurat de oameni.", cat: "extrovert" },
      { text: "Îți place să ai momente de reflecție și odihnă.", cat: "introvert" },
      { text: "Te simți energizat de experiențele noi și de întâlnirea cu oameni noi.", cat: "extrovert" },
    ],
  },
  {
    id: 13,
    question: "Cum reacționezi la critici?",
    answers: [
      { text: "Reflectezi asupra criticilor și încerci să înveți din ele în mod privat.", cat: "introvert" },
      { text: "Abordezi criticile în mod deschis și discuți despre ele cu ceilalți.", cat: "extrovert" },
      { text: "Te retragi și analizezi situația pentru a înțelege mai bine.", cat: "introvert" },
      { text: "Folosești criticile ca motivație pentru a te îmbunătăți și le discuți cu prietenii.", cat: "extrovert" },
    ],
  },
  {
    id: 14,
    question: "Cum te simți în legătură cu activitățile de grup la locul de muncă?",
    answers: [
      { text: "Preferi să lucrezi pe cont propriu și să contribui individual.", cat: "introvert" },
      { text: "Îți place să colaborezi și să faci parte dintr-o echipă.", cat: "extrovert" },
      { text: "Îți place să ai timp pentru a reflecta înainte de a contribui într-un grup.", cat: "introvert" },
      { text: "Îți place să împărtășești idei și să colaborezi activ cu colegii.", cat: "extrovert" },
    ],
  },
  {
    id: 15,
    question: "Cum îți petreci timpul în pauzele de la muncă?",
    answers: [
      { text: "Preferi să te relaxezi singur și să îți reîncarci bateriile.", cat: "introvert" },
      { text: "Îți place să te întâlnești cu colegii și să socializezi.", cat: "extrovert" },
      { text: "Îți place să te plimbi singur pentru a-ți clarifica gândurile.", cat: "introvert" },
      { text: "Îți place să ieși cu colegii pentru a discuta și a te relaxa împreună.", cat: "extrovert" },
    ],
  },
  {
    id: 16,
    question: "Cum te simți în legătură cu planificarea și organizarea evenimentelor?",
    answers: [
      { text: "Preferi să te ocupi de detalii și să planifici cu atenție.", cat: "introvert" },
      { text: "Îți place să coordonezi și să organizezi evenimente sociale.", cat: "extrovert" },
      { text: "Îți place să te asiguri că totul este bine pregătit și în ordine.", cat: "introvert" },
      { text: "Te simți în largul tău atunci când îți asumi roluri de leadership în organizarea de evenimente.", cat: "extrovert" },
    ],
  },
  {
    id: 17,
    question: "Cum reacționezi la schimbări bruște în planuri?",
    answers: [
      { text: "Te retragi și îți reevaluezi opțiunile înainte de a acționa.", cat: "introvert" },
      { text: "Te adaptezi rapid și îți ajustezi planurile fără probleme.", cat: "extrovert" },
      { text: "Reflectezi asupra schimbărilor și cauți soluții alternative.", cat: "introvert" },
      { text: "Îți place spontaneitatea și vezi schimbările ca pe noi oportunități.", cat: "extrovert" },
    ],
  },
  {
    id: 18,
    question: "Cum te simți la o petrecere mare?",
    answers: [
      { text: "Te simți copleșit și preferi să găsești un loc liniștit.", cat: "introvert" },
      { text: "Îți place să socializezi și să cunoști oameni noi.", cat: "extrovert" },
      { text: "Stai deoparte și observi din umbră.", cat: "introvert" },
      { text: "Te simți energizat și implicat în conversații și activități.", cat: "extrovert" },
    ],
  },
  {
    id: 19,
    question: "Cum te simți când primești o invitație neprevăzută?",
    answers: [
      { text: "Te gândești de două ori înainte de a accepta.", cat: "introvert" },
      { text: "Accepți imediat și te bucuri de surpriză.", cat: "extrovert" },
      { text: "Îți iei timp să te gândești dacă te simți confortabil să mergi.", cat: "introvert" },
      { text: "Te entuziasmezi și abia aștepți să participi.", cat: "extrovert" },
    ],
  },
  {
    id: 20,
    question: "Cum te simți în legătură cu rețelele de socializare?",
    answers: [
      { text: "Le folosești rar și preferi să comunici personal.", cat: "introvert" },
      { text: "Le folosești frecvent pentru a te conecta cu prietenii și familia.", cat: "extrovert" },
      { text: "Te limitezi la a urmări activitatea altora fără a posta prea mult.", cat: "introvert" },
      { text: "Îți place să împărtășești experiențele tale și să interacționezi online.", cat: "extrovert" },
    ],
  },
  {
    id: 21,
    question: "Cum reacționezi la ideea de a-ți petrece o zi întreagă singur?",
    answers: [
      { text: "Te simți confortabil și vezi asta ca pe o oportunitate de a te relaxa.", cat: "introvert" },
      { text: "Te simți neliniștit și cauți compania altora.", cat: "extrovert" },
      { text: "Te bucuri de liniștea și timpul pentru tine.", cat: "introvert" },
      { text: "Îți place să ai activități planificate și să fii în mișcare.", cat: "extrovert" },
    ],
  },
  {
    id: 22,
    question: "Cum reacționezi când cineva îți cere ajutorul?",
    answers: [
      { text: "Te oferi să ajuți, dar preferi să o faci discret și fără multă atenție.", cat: "introvert" },
      { text: "Ești bucuros să ajuți și să oferi sprijin în mod activ.", cat: "extrovert" },
      { text: "Ajuți cu plăcere, dar te asiguri că ai timp și pentru tine.", cat: "introvert" },
      { text: "Îți place să ajuți și să colaborezi cu ceilalți.", cat: "extrovert" },
    ],
  },
  {
    id: 23,
    question: "Cum te simți în timpul unui eveniment social necunoscut?",
    answers: [
      { text: "Te simți rezervat și observi din umbră.", cat: "introvert" },
      { text: "Îți faci ușor prieteni și te implici activ în conversații.", cat: "extrovert" },
      { text: "Ești precaut și îți iei timp să te acomodezi.", cat: "introvert" },
      { text: "Ești entuziasmat și deschis să cunoști oameni noi.", cat: "extrovert" },
    ],
  },
  {
    id: 24,
    question: "Cum reacționezi la feedback-ul constructiv?",
    answers: [
      { text: "Îl asimilezi și reflectezi asupra lui în mod privat.", cat: "introvert" },
      { text: "Îl apreciezi și discuți deschis despre cum să te îmbunătățești.", cat: "extrovert" },
      { text: "Îl analizezi cu atenție și cauți soluții în mod independent.", cat: "introvert" },
      { text: "Îl folosești ca pe o oportunitate de a te dezvolta și de a colabora cu ceilalți.", cat: "extrovert" },
    ],
  },
  {
    id: 25,
    question: "Cum te simți în legătură cu prezentările de grup?",
    answers: [
      { text: "Preferi să contribui din umbră și să eviți să fii în centrul atenției.", cat: "introvert" },
      { text: "Îți place să prezinți și să interacționezi cu publicul.", cat: "extrovert" },
      { text: "Te simți confortabil să prezinți în grupuri mici, dar eviți audiențele mari.", cat: "introvert" },
      { text: "Te simți energizat și îți place să captezi atenția audienței.", cat: "extrovert" },
    ],
  },
  {
    id: 26,
    question: "Cum reacționezi la situații conflictuale?",
    answers: [
      { text: "Te retragi și încerci să rezolvi conflictul în mod liniștit și discret.", cat: "introvert" },
      { text: "Abordezi conflictul direct și încerci să găsești o soluție pe loc.", cat: "extrovert" },
      { text: "Reflectezi asupra situației și cauți o soluție pașnică.", cat: "introvert" },
      { text: "Îți place să discuți deschis și să clarifici lucrurile imediat.", cat: "extrovert" },
    ],
  },
  {
    id: 27,
    question: "Cum reacționezi când trebuie să iei decizii rapide?",
    answers: [
      { text: "Îți iei un moment să reflectezi și să analizezi opțiunile.", cat: "introvert" },
      { text: "Te bazezi pe instinct și iei decizii rapide și încrezătoare.", cat: "extrovert" },
      { text: "Te consulți cu tine însuți și iei o decizie informată.", cat: "introvert" },
      { text: "Cauți sfatul celorlalți și iei decizia pe loc.", cat: "extrovert" },
    ],
  },
  {
    id: 28,
    question: "Cum reacționezi la ideea de a te muta într-un loc nou?",
    answers: [
      { text: "Te gândești la toate aspectele și planifici în detaliu.", cat: "introvert" },
      { text: "Ești entuziasmat de ideea de a explora un loc nou și de a cunoaște oameni noi.", cat: "extrovert" },
      { text: "Îți iei timp să te adaptezi la idee și cauți informații în prealabil.", cat: "introvert" },
      { text: "Îți place aventura și te adaptezi rapid la schimbări.", cat: "extrovert" },
    ],
  },
  {
    id: 29,
    question: "Cum te simți când trebuie să lucrezi cu oameni noi?",
    answers: [
      { text: "Îți ia ceva timp să te acomodezi, dar apoi colaborezi bine.", cat: "introvert" },
      { text: "Îți faci ușor prieteni și colaborezi eficient.", cat: "extrovert" },
      { text: "Preferi să îți observi colegii înainte de a te implica.", cat: "introvert" },
      { text: "Îți place să colaborezi și să împărtășești idei.", cat: "extrovert" },
    ],
  },
  {
    id: 30,
    question: "Cum reacționezi când ai de învățat ceva nou?",
    answers: [
      { text: "Preferi să studiezi singur și să te concentrezi în liniște.", cat: "introvert" },
      { text: "Îți place să înveți în grupuri și să discuți despre ceea ce ai învățat.", cat: "extrovert" },
      { text: "Îți iei timp să asimilezi informațiile în ritmul tău.", cat: "introvert" },
      { text: "Îți place să înveți prin interacțiune și colaborare.", cat: "extrovert" },
    ],
  },
  {
    id: 31,
    question: "Cum te simți când participi la o discuție intensă?",
    answers: [
      { text: "Preferi să asculți și să îți formezi opiniile în liniște.", cat: "introvert" },
      { text: "Îți place să te implici activ și să îți exprimi punctul de vedere.", cat: "extrovert" },
      { text: "Te retragi și reflectezi asupra discuției.", cat: "introvert" },
      { text: "Îți place să dezbați și să îți împărtășești ideile.", cat: "extrovert" },
    ],
  },
  {
    id: 32,
    question: "Cum reacționezi când primești o invitație la un eveniment mare?",
    answers: [
      { text: "Te gândești de două ori înainte de a accepta și preferi evenimentele mici.", cat: "introvert" },
      { text: "Accepți imediat și abia aștepți să participi.", cat: "extrovert" },
      { text: "Îți iei timp să decizi dacă vrei să participi.", cat: "introvert" },
      { text: "Te entuziasmezi și abia aștepți să te distrezi.", cat: "extrovert" },
    ],
  },
  {
    id: 33,
    question: "Cum te simți în legătură cu responsabilitățile noi?",
    answers: [
      { text: "Îți place să le abordezi în ritmul tău și să te organizezi bine.", cat: "introvert" },
      { text: "Te simți motivat și energizat de noi provocări.", cat: "extrovert" },
      { text: "Îți iei timp să înțelegi și să planifici responsabilitățile.", cat: "introvert" },
      { text: "Îți place să preiei noi responsabilități și să te implici activ.", cat: "extrovert" },
    ],
  },
  {
    id: 34,
    question: "Cum reacționezi la ideea de a te implica într-un proiect nou?",
    answers: [
      { text: "Te gândești bine înainte de a te implica și preferi să planifici în detaliu.", cat: "introvert" },
      { text: "Îți place să te implici imediat și să începi să lucrezi.", cat: "extrovert" },
      { text: "Îți iei timp să analizezi toate aspectele proiectului.", cat: "introvert" },
      { text: "Te simți entuziasmat și motivat să începi imediat.", cat: "extrovert" },
    ],
  },
  {
    id: 35,
    question: "Cum te simți când trebuie să îți exprimi opinia într-un grup mare?",
    answers: [
      { text: "Preferi să îți exprimi opinia într-un cadru mai restrâns.", cat: "introvert" },
      { text: "Îți place să îți exprimi opinia și să discuți deschis.", cat: "extrovert" },
      { text: "Te simți mai confortabil să asculți și să reflectezi asupra opiniilor celorlalți.", cat: "introvert" },
      { text: "Te simți în largul tău să îți exprimi opinia în fața unui grup mare.", cat: "extrovert" },
    ],
  },
  {
    id: 36,
    question: "Cum reacționezi când trebuie să faci față unui termen limită strâns?",
    answers: [
      { text: "Îți organizezi timpul și îți faci un plan detaliat.", cat: "introvert" },
      { text: "Te simți energizat și te concentrezi pe îndeplinirea sarcinilor.", cat: "extrovert" },
      { text: "Îți iei un moment să reflectezi și să prioritizezi sarcinile.", cat: "introvert" },
      { text: "Îți place să lucrezi sub presiune și să finalizezi sarcinile rapid.", cat: "extrovert" },
    ],
  },
  {
    id: 37,
    question: "Cum te simți în legătură cu activitățile spontane?",
    answers: [
      { text: "Preferi să planifici activitățile și să eviți surprizele.", cat: "introvert" },
      { text: "Îți place spontaneitatea și te bucuri de aventuri neplanificate.", cat: "extrovert" },
      { text: "Îți iei timp să te pregătești înainte de a te implica în activități.", cat: "introvert" },
      { text: "Te simți entuziasmat de activitățile spontane și provocări noi.", cat: "extrovert" },
    ],
  },
  {
    id: 38,
    question: "Cum reacționezi când trebuie să lucrezi sub presiune?",
    answers: [
      { text: "Îți iei timp să te concentrezi și să îți gestionezi stresul.", cat: "introvert" },
      { text: "Te simți motivat și te concentrezi pe îndeplinirea sarcinilor.", cat: "extrovert" },
      { text: "Îți faci un plan detaliat și te organizezi bine.", cat: "introvert" },
      { text: "Îți place să lucrezi sub presiune și să îți demonstrezi abilitățile.", cat: "extrovert" },
    ],
  },
  {
    id: 39,
    question: "Cum te simți în legătură cu schimbările majore în viață?",
    answers: [
      { text: "Îți iei timp să te adaptezi și să planifici fiecare pas.", cat: "introvert" },
      { text: "Ești entuziasmat de schimbări și te adaptezi rapid.", cat: "extrovert" },
      { text: "Preferi să te pregătești în avans și să te asiguri că totul este sub control.", cat: "introvert" },
      { text: "Îți place aventura și ești deschis la schimbări majore.", cat: "extrovert" },
    ],
  },
  {
    id: 40,
    question: "Cum reacționezi când ești confruntat cu o problemă complexă?",
    answers: [
      { text: "Îți iei timp să analizezi toate aspectele și să găsești o soluție.", cat: "introvert" },
      { text: "Abordezi problema direct și cauți soluții rapide.", cat: "extrovert" },
      { text: "Reflectezi asupra problemei și cauți o soluție bine gândită.", cat: "introvert" },
      { text: "Îți place să colaborezi cu ceilalți pentru a găsi cea mai bună soluție.", cat: "extrovert" },
    ],
  },
  {
    id: 41,
    question: "Cum te simți în legătură cu planificarea pe termen lung?",
    answers: [
      { text: "Îți place să planifici în detaliu și să ai totul sub control.", cat: "introvert" },
      { text: "Îți place să te concentrezi pe prezent și să te adaptezi la schimbări.", cat: "extrovert" },
      { text: "Îți iei timp să reflectezi asupra obiectivelor tale și să planifici cu atenție.", cat: "introvert" },
      { text: "Îți place să ai o viziune clară, dar ești flexibil în abordare.", cat: "extrovert" },
    ],
  },
  {
    id: 42,
    question: "Cum reacționezi la ideea de a fi liderul unui proiect?",
    answers: [
      { text: "Preferi să contribui din umbră și să eviți responsabilitățile de lider.", cat: "introvert" },
      { text: "Îți place să fii lider și să îți inspiri echipa.", cat: "extrovert" },
      { text: "Îți iei timp să planifici și să organizezi echipa.", cat: "introvert" },
      { text: "Te simți motivat să preiei conducerea și să coordonezi echipa.", cat: "extrovert" },
    ],
  },
  {
    id: 43,
    question: "Cum te simți în legătură cu activitățile de grup?",
    answers: [
      { text: "Preferi să observi și să te implici mai puțin.", cat: "introvert" },
      { text: "Îți place să te implici activ și să colaborezi cu ceilalți.", cat: "extrovert" },
      { text: "Îți place să te concentrezi pe sarcinile tale și să lucrezi independent.", cat: "introvert" },
      { text: "Te simți motivat de dinamica grupului și de munca în echipă.", cat: "extrovert" },
    ],
  },
  {
    id: 44,
    question: "Cum reacționezi la ideea de a-ți prezenta ideile în fața unei audiențe?",
    answers: [
      { text: "Preferi să îți prezinți ideile într-un cadru restrâns și familiar.", cat: "introvert" },
      { text: "Îți place să împărtășești ideile tale și să discuți deschis.", cat: "extrovert" },
      { text: "Îți iei timp să îți pregătești prezentarea și să te simți confortabil.", cat: "introvert" },
      { text: "Te simți motivat să îți prezinți ideile și să captezi atenția audienței.", cat: "extrovert" },
    ],
  },
  {
    id: 45,
    question: "Cum te simți când trebuie să rezolvi o problemă dificilă?",
    answers: [
      { text: "Preferi să reflectezi în liniște și să găsești soluția pe cont propriu.", cat: "introvert" },
      { text: "Îți place să discuți problema cu ceilalți și să găsești soluții împreună.", cat: "extrovert" },
      { text: "Te retragi și analizezi toate aspectele problemei.", cat: "introvert" },
      { text: "Îți place să te confrunți direct cu problema și să o rezolvi rapid.", cat: "extrovert" },
    ],
  },
  {
    id: 46,
    question: "Cum reacționezi la ideea de a fi voluntar într-un proiect comunitar?",
    answers: [
      { text: "Preferi să te implici în activități care nu implică interacțiuni sociale intense.", cat: "introvert" },
      { text: "Îți place să te implici activ și să colaborezi cu ceilalți.", cat: "extrovert" },
      { text: "Îți alegi cu grijă activitățile și preferi să lucrezi independent.", cat: "introvert" },
      { text: "Te simți motivat să contribui și să îți faci prieteni noi.", cat: "extrovert" },
    ],
  },
  {
    id: 47,
    question: "Cum reacționezi când trebuie să iei o decizie importantă?",
    answers: [
      { text: "Îți iei timp să reflectezi și să analizezi toate opțiunile.", cat: "introvert" },
      { text: "Îți place să discuți cu ceilalți și să iei decizia împreună.", cat: "extrovert" },
      { text: "Te consulți cu tine însuți și iei o decizie bine gândită.", cat: "introvert" },
      { text: "Te simți confortabil să iei decizii rapide și să te bazezi pe instinct.", cat: "extrovert" },
    ],
  },
  {
    id: 48,
    question: "Cum reacționezi la ideea de a lucra într-un mediu agitat?",
    answers: [
      { text: "Preferi un mediu liniștit și bine organizat.", cat: "introvert" },
      { text: "Te simți energizat și motivat de un mediu dinamic și plin de viață.", cat: "extrovert" },
      { text: "Îți iei timp să te adaptezi și să îți organizezi sarcinile.", cat: "introvert" },
      { text: "Îți place agitația și te simți motivat să lucrezi într-un mediu dinamic.", cat: "extrovert" },
    ],
  },
  {
    id: 49,
    question: "Cum te simți în legătură cu colaborările în echipă?",
    answers: [
      { text: "Preferi să lucrezi pe cont propriu și să ai control total asupra sarcinilor tale.", cat: "introvert" },
      { text: "Îți place să colaborezi și să împărtășești idei cu ceilalți.", cat: "extrovert" },
      { text: "Te simți confortabil să lucrezi independent și să te consulți doar când e necesar.", cat: "introvert" },
      { text: "Te simți motivat de munca în echipă și de colaborarea cu ceilalți.", cat: "extrovert" },
    ],
  },
  {
    id: 50,
    question: "Cum reacționezi când trebuie să îți asumi responsabilități noi?",
    answers: [
      { text: "Îți iei timp să te pregătești și să înțelegi noile responsabilități.", cat: "introvert" },
      { text: "Te simți motivat și energizat de noi provocări.", cat: "extrovert" },
      { text: "Preferi să îți organizezi sarcinile și să le abordezi în ritmul tău.", cat: "introvert" },
      { text: "Îți place să preiei noi responsabilități și să te implici activ.", cat: "extrovert" },
    ],
  },
];  

module.exports = questions;
