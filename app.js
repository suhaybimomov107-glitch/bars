const wiki = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=640`;

const PLAYERS = [
  {
    num: 1,
    name: "Joan García",
    nameTj: "Жоан Гарсия",
    pos: "gk",
    posTj: "Дарвозабон",
    nation: "Испания",
    photo: wiki("Joan_Garcia_Argentina_v_Spain_19_July_2026-009.jpg"),
    video: "ubXGPGXOH8M",
    videoKind: "saves",
    videoTitle: "Беҳтарин сейвҳои Жоан Гарсия",
  },
  {
    num: 13,
    name: "Wojciech Szczęsny",
    nameTj: "Войчех Шченсни",
    pos: "gk",
    posTj: "Дарвозабон",
    nation: "Лаҳистон",
    photo: wiki("Wojciech_Szczęsny.png"),
    video: "7S8IZ3-OOvc",
    videoKind: "saves",
    videoTitle: "Голҳо ва лаҳзаҳои Барселона",
  },
  {
    num: 25,
    name: "Dominik Livaković",
    nameTj: "Доминик Ливакович",
    pos: "gk",
    posTj: "Дарвозабон",
    nation: "Хорватия",
    photo: wiki("Dominik_Livakovic_Croatia_v_Portugal_2_July_2026-063.jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "saves",
    videoTitle: "Голҳо ва лаҳзаҳои Барселона",
  },
  {
    num: 2,
    name: "João Cancelo",
    nameTj: "Жоау Канселу",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Португалия",
    photo: wiki("Joao_Cancelo_Croatia_v_Portugal_2_July_2026-002.jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Канселу",
  },
  {
    num: 3,
    name: "Alejandro Balde",
    nameTj: "Алехандро Балде",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Испания",
    photo: wiki("Esapana-inglaterra-74_(48899354493).jpg"),
    video: "3eoUGH_7CEU",
    videoKind: "goals",
    videoTitle: "Голҳо ва лаҳзаҳои Алехандро Балде",
  },
  {
    num: 5,
    name: "Pau Cubarsí",
    nameTj: "Пау Кубарси",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Испания",
    photo: wiki("Pau_Cubarsi_Argentina_v_Spain_19_July_2026-181_(cropped).jpg"),
    video: "8yJ9R9lpfmo",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Пау Кубарси",
  },
  {
    num: 12,
    name: "Xavi Espart",
    nameTj: "Хави Эспарт",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Испания",
    photo: "",
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Барселона",
  },
  {
    num: 15,
    name: "Andreas Christensen",
    nameTj: "Андреас Кристенсен",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Дания",
    photo: wiki("Andreas_Christensen_2019.jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Кристенсен",
  },
  {
    num: 18,
    name: "Gerard Martín",
    nameTj: "Жерард Мартин",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Испания",
    photo: wiki("2025_04_26_Final_de_la_Copa_del_Rey_-_54482387776_-_Gerard_Martín.jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Мартин",
  },
  {
    num: 23,
    name: "Jules Koundé",
    nameTj: "Жул Кунде",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Фаронса",
    photo: wiki("Jules_Kounde_France_v_Senegal_16_June_2026-449_(cropped).jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Кунде",
  },
  {
    num: 24,
    name: "Eric García",
    nameTj: "Эрик Гарсия",
    pos: "df",
    posTj: "Ҳимоятгар",
    nation: "Испания",
    photo: wiki("Eric_Garcia_Argentina_v_Spain_19_July_2026-313_(cropped).jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Эрик Гарсия",
  },
  {
    num: 4,
    name: "Brian Fariñas",
    nameTj: "Брайан Фариняс",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Испания",
    photo: "",
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Барселона",
  },
  {
    num: 6,
    name: "Gavi",
    nameTj: "Гави",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Испания",
    photo: wiki("Gavi_Argentina_v_Spain_19_July_2026-013.jpg"),
    video: "PPvxzGmiUjs",
    videoKind: "goals",
    videoTitle: "Голҳо ва лаҳзаҳои Гави",
  },
  {
    num: 7,
    name: "Fermín López",
    nameTj: "Фермин Лопес",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Испания",
    photo: wiki("Fermín_López_(cropped).jpg"),
    video: "L0vyqZUnVio",
    videoKind: "goals",
    videoTitle: "Ҳамаи голҳои Фермин Лопес",
  },
  {
    num: 8,
    name: "Pedri",
    nameTj: "Педри",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Испания",
    photo: wiki("Pedri_France_v_Spain_7.24.26-245.jpg"),
    video: "51UvxTjGNZg",
    videoKind: "goals",
    videoTitle: "Голҳо ва лаҳзаҳои Педри",
  },
  {
    num: 16,
    name: "Rodri",
    nameTj: "Родри",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Испания",
    photo: wiki("Rodri_Argentina_v_Spain_19_July_2026-187_(cropped).jpg"),
    video: "tvyZ3M-WouM",
    videoKind: "goals",
    videoTitle: "Ҳамаи голҳои Родри",
  },
  {
    num: 20,
    name: "Dani Olmo",
    nameTj: "Дани Олмо",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Испания",
    photo: wiki("Dani_Olmo_France_v_Spain_7.24.26-176_(cropped).jpg"),
    video: "LTVXiWI1UvU",
    videoKind: "goals",
    videoTitle: "Голҳо ва лаҳзаҳои Дани Олмо",
  },
  {
    num: 21,
    name: "Frenkie de Jong",
    nameTj: "Френки де Йонг",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Нидерланд",
    photo: wiki("Матч «Динамо» - «Барселона» 0-1. 2 ноября 2021 года. II — 1289671 (cropped).jpg"),
    video: "RGzQ78r22uk",
    videoKind: "goals",
    videoTitle: "Голҳо ва лаҳзаҳои Френки де Йонг",
  },
  {
    num: 22,
    name: "Marc Bernal",
    nameTj: "Марк Бернал",
    pos: "mf",
    posTj: "Нимҳимоятгар",
    nation: "Испания",
    photo: wiki("Marc_Bernal_(2025).png"),
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Бернал",
  },
  {
    num: 9,
    name: "Gabriel Jesus",
    nameTj: "Габриэл Жесус",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Бразилия",
    photo: wiki("20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Gabriel_Jesus_850_1688.jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "goals",
    videoTitle: "Голҳои Барселона — Габриэл Жесус",
  },
  {
    num: 10,
    name: "Lamine Yamal",
    nameTj: "Ламин Ямал",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Испания",
    photo: wiki("Lamine_Yamal_France_v_Spain_7.24.26-142.jpg"),
    video: "M37orXBtvtg",
    videoKind: "goals",
    videoTitle: "Ҳамаи голҳои Ламин Ямал",
    featured: true,
  },
  {
    num: 11,
    name: "Raphinha",
    nameTj: "Рафиня",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Бразилия",
    photo: wiki("Raphinha_Brazil_V_Morocco_13_June_2026-133_(cropped).jpg"),
    video: "uTlarhL4RP8",
    videoKind: "goals",
    videoTitle: "Ҳамаи голҳои Рафиня",
  },
  {
    num: 14,
    name: "Karim Adeyemi",
    nameTj: "Карим Адееми",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Олмон",
    photo: wiki("FC_Salzburg_gegen_FC_Bayern_München_(Championsleague_Achtelfinale_Hinspiel_16._Februar_2022)_63.jpg"),
    video: "40baZBxNCUM",
    videoKind: "goals",
    videoTitle: "Ҳамаи голҳои Карим Адееми дар Лигаи Қаҳрамонҳо",
  },
  {
    num: 17,
    name: "Anthony Gordon",
    nameTj: "Энтони Гордон",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Англия",
    photo: wiki("Team_England_England_v_Ghana_at_2026_Fifa_World_Cup_by_YantsImages_03_(Anthony_Gordon).jpg"),
    video: "1InWACGBl7U",
    videoKind: "goals",
    videoTitle: "Голҳои Энтони Гордон",
  },
  {
    num: 19,
    name: "Roony Bardghji",
    nameTj: "Руни Бардгжи",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Шветсия",
    photo: wiki("Roony_Bardghji,_Vejle_Boldklub_-_FC_København,_29._July_2023_-_opvarmning_(cropped).jpg"),
    video: "7S8IZ3-OOvc",
    videoKind: "goals",
    videoTitle: "Голҳо ва лаҳзаҳои Бардгжи",
  },
  {
    num: 27,
    name: "Jesse Bisiwu",
    nameTj: "Ҷесси Бисиву",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Белгия",
    photo: "",
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Барселона",
  },
  {
    num: 29,
    name: "Hamza Abdelkarim",
    nameTj: "Ҳамза Абделкарим",
    pos: "fw",
    posTj: "Ҳамлагар",
    nation: "Миср",
    photo: "",
    video: "7S8IZ3-OOvc",
    videoKind: "highlights",
    videoTitle: "Беҳтарин лаҳзаҳои Барселона",
  },
];

const GROUPS = [
  { id: "gk", title: "Дарвозабонҳо" },
  { id: "df", title: "Ҳимоятгарон" },
  { id: "mf", title: "Нимҳимоятгарон" },
  { id: "fw", title: "Ҳамлагарон" },
];

const m = (vs, comp, minute, score, how, shot = "power") => ({
  vs,
  comp,
  minute,
  score,
  how,
  shot,
});

const MOMENTS = {
  1: [
    m("Эспаньол", "La Liga", "90'", "2-0", "Беҳтарин сейви мавсим аз зарбаи сар", "save"),
    m("Райо Валекано", "La Liga", "12'", "1-0", "Ду сейви пайҳам дар як дақиқа", "save"),
    m("Жирона", "La Liga", "67'", "2-1", "Партофти дарозро бо даст гирифт", "save"),
  ],
  13: [
    m("Бенфика", "UCL", "44'", "1-0", "Ҳашт сейв дар як бозӣ", "save"),
    m("Реал Мадрид", "La Liga", "52'", "Пеналти", "Пеналии Мбапперо гирифт", "save"),
  ],
  25: [
    m("Бразилия", "Ҷаҳон 2022", "120'", "Пеналтиҳо", "Чор сейв дар силсилаи пеналти", "save"),
    m("Ҷопон", "Ҷаҳон 2022", "90'", "1-1", "Сейвҳои калон дар даври 1/8", "save"),
  ],
  2: [
    m("Реал Бетис", "La Liga", "74'", "3-1", "Зарбаи ҳалкунанда аз канори рост", "power"),
    m("Селта", "La Liga", "89'", "3-2", "Гол аз наздикии дарвоза", "power"),
  ],
  3: [
    m("Кадис", "La Liga", "51'", "2-0", "Давидан аз чап ва зарба", "curl"),
    m("Атлетик", "Copa", "33'", "1-0", "Гол пас аз рахна аз канор", "solo"),
  ],
  5: [
    m("Жирона", "La Liga", "28'", "1-0", "Сарзани аз маркази Кунде", "header"),
    m("Атлетико", "Copa", "61'", "1-1", "Аввалин голи ӯ барои Барса", "header"),
  ],
  12: [
    m("Атлетик", "La Liga", "18'", "0-0", "Аввалин дақиқаҳо бо рақами 12", "solo"),
  ],
  15: [
    m("Севиля", "La Liga", "41'", "2-0", "Гол аз дурӣ, тақрибан 30 метр", "power"),
  ],
  18: [
    m("Валенсия", "Copa", "55'", "1-0", "Ҳамла аз чап ва зарбаи дақиқ", "curl"),
  ],
  23: [
    m("Айнтрахт", "UCL", "64'", "2-1", "Ду гол аз канори рост", "power"),
    m("Жирона", "La Liga", "70'", "2-0", "Зарба аз масофаи наздик", "power"),
  ],
  24: [
    m("Севиля", "La Liga", "88'", "4-1", "Гол дар дақиқаҳои охир", "power"),
  ],
  4: [
    m("Барса Атлетик", "La Liga", "77'", "1-0", "Аввалин гол дар сатҳи калон", "curl"),
  ],
  6: [
    m("Атлетик", "Суперкубок", "17'", "1-0", "Гол дар нимаи аввал", "power"),
    m("Севиля", "La Liga", "22'", "1-0", "Зарба аз канори ҷарима", "curl"),
  ],
  7: [
    m("Валенсия", "La Liga", "29'", "2-0", "Зарбаи дур аз канори ҷарима", "power"),
    m("Валенсия", "La Liga", "6'", "1-0", "Ассист ба Ямал, баъд худаш зад", "curl"),
    m("Нюкасл", "UCL", "51'", "4-2", "Гол дар ғалабаи 7-2", "power"),
    m("Реал Мадрид", "La Liga", "38'", "1-1", "Гол дар Эл Класико", "power"),
    m("Олимпиакос", "UCL", "7'", "1-0", "Се гол дар як шаб", "curl"),
  ],
  8: [
    m("Валенсия", "La Liga", "79'", "4-0", "Пас бо Олмо ва зарбаи паст", "curl"),
    m("Севиля", "La Liga", "63'", "2-0", "Гул задан пас аз рахнаи миён", "solo"),
    m("Жирона", "La Liga", "44'", "1-0", "Зарба аз берун аз ҷарима", "curl"),
  ],
  16: [
    m("Интер", "Финали UCL 2023", "68'", "1-0", "Голи таърихии финал", "power"),
    m("Астон Вилла", "Premier League", "8'", "1-0", "Зарба аз канори ҷарима", "power"),
    m("Арсенал", "Premier League", "88'", "1-0", "Голи дер, голи ҳалкунанда", "power"),
  ],
  20: [
    m("Майорка", "La Liga", "46'", "1-0", "Зарбаи паст дар ибтидои нимаи дуюм", "curl"),
    m("Славия", "UCL", "34'", "1-1", "Гол дар Лигаи Қаҳрамонҳо", "power"),
    m("Реал Овиедо", "La Liga", "21'", "1-0", "Кушодани ҳисоб", "curl"),
  ],
  21: [
    m("Леванте", "La Liga", "58'", "2-0", "Гол аз миён", "power"),
    m("Севиля", "La Liga", "71'", "2-1", "Зарба пас аз рахна", "solo"),
  ],
  22: [
    m("Валенсия", "La Liga", "41'", "1-0", "Гол дар ҳамлаи аввал", "power"),
    m("Алавес", "La Liga", "66'", "2-0", "Зарба аз наздикӣ", "power"),
  ],
  9: [
    m("Астон Вилла", "Premier League", "78'", "4-1", "Гол фавран пас аз баромадан", "power"),
    m("Интер", "UCL", "55'", "2-1", "Ду гол дар Лигаи Қаҳрамонҳо", "curl"),
    m("Валенсия", "La Liga", "84'", "5-0", "Қариб аввалин голи Барса", "power"),
  ],
  10: [
    m("Валенсия", "La Liga", "6'", "1-0", "Аз кунҷи танги дарвоза аз болои дарвозабон", "chip"),
    m("Валенсия", "La Liga", "84'", "5-0", "Голи дуюм, зарбаи ором назди дарвоза", "curl"),
    m("Вилярреал", "La Liga", "22'", "1-0", "Аввалин ҳет-трики ҳаёташ", "curl"),
    m("Вилярреал", "La Liga", "41'", "2-1", "Голи дуюм дар ҳет-трик", "power"),
    m("Вилярреал", "La Liga", "71'", "3-1", "Голи сеюм, ҷашн бо нишон", "curl"),
    m("Реал Мадрид", "La Liga", "53'", "1-0", "Голи Эл Класико", "curl"),
    m("Бавария", "UCL", "27'", "1-0", "Гол дар Лигаи Қаҳрамонҳо", "solo"),
    m("Алавес", "La Liga", "38'", "2-1", "Зарбаи чап пас аз рахна", "curl"),
    m("Нюкасл", "UCL", "61'", "5-2", "Гол дар шаби 7-2", "power"),
    m("Севиля", "La Liga", "14'", "1-0", "Рахна аз рост ва зарбаи чап", "solo"),
  ],
  11: [
    m("Валенсия", "La Liga", "50'", "3-0", "Гол аз наздикии дурдасти дарвоза", "power"),
    m("Бавария", "UCL", "37'", "2-0", "Ҳет-трик дар Лигаи Қаҳрамонҳо", "curl"),
    m("Реал Мадрид", "La Liga", "18'", "1-0", "Гол дар Эл Класико", "power"),
    m("Бенфика", "UCL", "44'", "2-1", "Голҳои пайҳам дар Аврупо", "curl"),
    m("Нюкасл", "UCL", "73'", "6-2", "Гол дар ғалабаи калон", "power"),
  ],
  14: [
    m("Базел", "Дӯстона", "33'", "1-0", "Аввалин гол барои Барселона", "power"),
    m("Селтик", "UCL", "21'", "3-1", "Ҳет-трик, зарба аз 20 метр", "power"),
    m("Ювентус", "UCL", "54'", "1-0", "Зарба аз канори ҷарима", "curl"),
    m("Бавария", "Bundesliga", "19'", "1-1", "Гол бар зидди дастаи собиқ", "solo"),
  ],
  17: [
    m("Ливерпул", "Premier League", "67'", "2-0", "Гол бар зидди Ливерпул", "curl"),
    m("Челси", "Premier League", "81'", "1-0", "Голи дер", "power"),
    m("Барнли", "Premier League", "86'", "2-1", "Пеналти", "power"),
  ],
  19: [
    m("Сеул", "Дӯстона", "64'", "2-1", "Гол дар пешмавсим", "curl"),
    m("Жирона", "La Liga", "77'", "2-0", "Зарба аз рост", "curl"),
  ],
  27: [
    m("Барса Атлетик", "La Liga", "82'", "1-0", "Аввалин гол дар дастаи калон", "solo"),
  ],
  29: [
    m("Базел", "Дӯстона", "71'", "2-0", "Гол аз ассисти Адееми", "power"),
  ],
};

const actionLabel = (kind) => {
  if (kind === "saves") return "Сейвҳоро бинед ▶";
  if (kind === "highlights") return "Лаҳзаҳоро бинед ▶";
  return "Голҳоро бинед ▶";
};

const grid = document.getElementById("squad");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
const chips = [...document.querySelectorAll(".chip")];
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalSub = document.getElementById("modalSub");
const closeBtn = document.getElementById("closeModal");
const ball = document.getElementById("ball");
const shooter = document.getElementById("shooter");
const golFlash = document.getElementById("golFlash");
const boardScore = document.getElementById("boardScore");
const boardMeta = document.getElementById("boardMeta");
const replayHow = document.getElementById("replayHow");
const replayFace = document.getElementById("replayFace");
const goalList = document.getElementById("goalList");
const goalCount = document.getElementById("goalCount");
const barFill = document.getElementById("barFill");
const playBtn = document.getElementById("playGoal");
const prevBtn = document.getElementById("prevGoal");
const nextBtn = document.getElementById("nextGoal");
const goalBox = document.querySelector(".goal");

let filter = "all";
let query = "";

function render() {
  const q = query.trim().toLowerCase();
  const shown = PLAYERS.filter((p) => {
    const okPos = filter === "all" || p.pos === filter;
    const okQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.nameTj.toLowerCase().includes(q) ||
      String(p.num).includes(q);
    return okPos && okQ;
  });

  grid.innerHTML = "";
  GROUPS.forEach((group) => {
    const people = shown.filter((p) => p.pos === group.id);
    if (!people.length) return;

    const wrap = document.createElement("section");
    wrap.className = "group";
    wrap.innerHTML = `
      <div class="section-title">
        <h2>${group.title}</h2>
        <span>${people.length} бозингар</span>
      </div>
      <div class="grid"></div>
    `;
    const g = wrap.querySelector(".grid");
    people
      .slice()
      .sort((a, b) => a.num - b.num)
      .forEach((p) => g.appendChild(card(p)));
    grid.appendChild(wrap);
  });

  empty.style.display = shown.length ? "none" : "block";
}

function card(p) {
  const btn = document.createElement("button");
  btn.className = p.featured ? "card featured" : "card";
  btn.type = "button";
  btn.setAttribute("aria-label", `${p.nameTj}, ${actionLabel(p.videoKind)}`);
  btn.innerHTML = `
    ${
      p.photo
        ? `<img src="${p.photo}" alt="${p.nameTj}" loading="lazy">`
        : `<div class="card-fallback">${p.num}</div>`
    }
    <span class="badge">${p.num}</span>
    <span class="play" aria-hidden="true">▶</span>
    <div class="meta">
      <small>${p.posTj} · ${p.nation}</small>
      <strong>${p.nameTj}</strong>
      <em>${actionLabel(p.videoKind)}</em>
    </div>
  `;
  const img = btn.querySelector("img");
  if (img) {
    img.addEventListener("error", () => {
      img.replaceWith(Object.assign(document.createElement("div"), {
        className: "card-fallback",
        textContent: String(p.num),
      }));
    });
  }
  btn.addEventListener("click", () => openVideo(p));
  return btn;
}

let currentPlayer = null;
let currentIndex = 0;
let playing = false;
let timer = null;

function momentsFor(p) {
  return MOMENTS[p.num] || [
    m("Барселона", "La Liga", "90'", "1-0", "Лаҳзаи аввалини ӯ дар даста", "power"),
  ];
}

function openVideo(p) {
  currentPlayer = p;
  currentIndex = 0;
  modalTitle.textContent = p.videoTitle;
  modalSub.textContent = `${p.name} · №${p.num} · ${p.posTj}`;
  if (p.photo) {
    replayFace.src = p.photo;
    replayFace.style.display = "block";
  } else {
    replayFace.removeAttribute("src");
    replayFace.style.display = "none";
  }
  drawList();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  playing = true;
  playBtn.textContent = "❚❚";
  showMoment(true);
}

function drawList() {
  const list = momentsFor(currentPlayer);
  goalList.innerHTML = "";
  list.forEach((g, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "goal-item" + (i === currentIndex ? " active" : "");
    b.innerHTML = `<b>${g.score} vs ${g.vs}</b><span>${g.comp} · ${g.minute}</span>`;
    b.addEventListener("click", () => {
      currentIndex = i;
      showMoment(true);
    });
    goalList.appendChild(b);
  });
}

function showMoment(restartTimer) {
  if (!currentPlayer) return;
  const list = momentsFor(currentPlayer);
  const g = list[currentIndex];
  const isSave = currentPlayer.videoKind === "saves" || g.shot === "save";
  boardScore.textContent = `BAR ${g.score}`;
  boardMeta.textContent = `${g.comp} · ${g.minute} · ${g.vs}`;
  replayHow.textContent = g.how;
  goalCount.textContent = `${currentIndex + 1}/${list.length}`;
  barFill.style.width = `${((currentIndex + 1) / list.length) * 100}%`;
  golFlash.textContent = isSave ? "СЕЙВ!" : "ГОЛ!";
  golFlash.classList.toggle("save-text", isSave);
  drawList();

  ball.className = "ball";
  shooter.className = "shooter";
  goalBox.classList.remove("hit");
  golFlash.classList.remove("show");
  void ball.offsetWidth;
  shooter.classList.add("run");
  ball.classList.add("fly", g.shot || "power");

  window.setTimeout(() => {
    if (isSave) golFlash.classList.add("show");
    else {
      goalBox.classList.add("hit");
      golFlash.classList.add("show");
    }
  }, 900);

  if (restartTimer) queueNext();
}

function queueNext() {
  clearTimeout(timer);
  if (!playing) return;
  timer = window.setTimeout(() => {
    const list = momentsFor(currentPlayer);
    currentIndex = (currentIndex + 1) % list.length;
    showMoment(true);
  }, 4200);
}

function closeVideo() {
  playing = false;
  clearTimeout(timer);
  currentPlayer = null;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

playBtn.addEventListener("click", () => {
  playing = !playing;
  playBtn.textContent = playing ? "❚❚" : "▶";
  if (playing) queueNext();
  else clearTimeout(timer);
});

prevBtn.addEventListener("click", () => {
  if (!currentPlayer) return;
  const list = momentsFor(currentPlayer);
  currentIndex = (currentIndex - 1 + list.length) % list.length;
  showMoment(playing);
});

nextBtn.addEventListener("click", () => {
  if (!currentPlayer) return;
  const list = momentsFor(currentPlayer);
  currentIndex = (currentIndex + 1) % list.length;
  showMoment(playing);
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    filter = chip.dataset.filter;
    render();
  });
});

search.addEventListener("input", (e) => {
  query = e.target.value;
  render();
});

closeBtn.addEventListener("click", closeVideo);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeVideo();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideo();
});

render();
