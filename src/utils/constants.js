//
import imageMe from "../assets/images/me.jpg";
//import imageGea from "../assets/images/projects/gea.png";
//import imageYNPR from "../assets/images/projects/ynpr.png";
//import imageAPI from "../assets/images/projects/api.png";

export const home = {
  image: imageMe,
  name: "Lucas Ribeiro",
  oficio: "Software Developer",
  study: "Biotechnology Student",
  email: "lucasemanuel-00000@hotmail.com",
  socials: [
    "https://www.linkedin.com/in/lucas-ribeiro-2ba4101a2/",
    "https://github.com/Luc-emanuel",
  ],
  cv: "../../utils/curriculo",
  skills: [
    {
      title: "Python",
      desc: "Python foi a primeira linguagem de programação que aprendi em alto nível. O conhecimento de Python aprendido no decorrer dos estudos e conversas com amigos. Desde a criação do meu primeiro Hello World, passando pela primeira conexão com o banco de dados até a criação da primeira API RESTful com Flask, Python é uma linguagem da qual obtive todos os fundamentos da programação orientada a objetos.",
    },
    {
      title: "JavaScript",
      desc: "Experiência prática com JavaScript em vários projetos. A linguagem tem sido usada principalmente com NPMjs para garantir um gerenciamento de dependências mais fácil e um desenvolvimento mais fácil. Por causa da tipagem do JavaScript, aprendi como não perder a cabeça depois de perceber uma exceção aleatória que não tem nada a ver com o bug real e como depurar esses problemas com eficiência (não apenas em js).",
    },
    {
      title: "PHP",
      desc: "Meu conhecimento em PHP cresceu a medida que pegava projetos e tinham partes em PHP. Estudava a linguagem para poder resolver os problemas no projeto. Como quando atuei na tradução para JavaScript de um site que estava todo em PHP, todo o tempo gasto para entender o que estava feito foi muito importante. Hoje tenho o PHP como uma bela bagagem.",
    },
  ],
  stats: [
    { title: "Anos de experiência", value: "3+" },
    { title: "Projetos Completos", value: "5" },
    { title: "Projeto em Progresso", value: "1" },
  ],
};

export const infoContacts = [
  [
    { title: "País", value: "Brazil" },
    { title: "Cidade", value: "Juazeiro" },
  ],
  [
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/lucas-ribeiro-2ba4101a2/",
      link: true,
    },
    { title: "Github", value: "https://github.com/Luc-emanuel", link: true },
    {
      title: "Instagram",
      value: "https://www.instagram.com/lucasr01123/",
      link: true,
    },
  ],
  [
    { title: "Email", value: "lucasemanuel-00000@hotmail.com" },
    { title: "Celular", value: "(74) 9 8118-6884" },
  ],
];

/*
export const projects = [
  {
    name: "RELDS - API",
    desc: "API de scraping de produtos",
    url: "https://github.com/Luc-emanuel/relds",
    image: imageAPI,
    back: "#00dddd",
  },
  {
    name: "GEA Sistemas",
    desc: "Sistema de gerenciamento para revendedores de maquinário utilizado em vacas leiteiras",
    url: "https://geasistemas.azurewebsites.net/",
    image: imageGea,
    back: "#000000",
  },
  {
    name: "YNP rGame",
    desc: "Jogo de clique rápido com alta penalização",
    url: "https://luc-emanuel.github.io/YNP-r/",
    image: imageYNPR,
    back: "#000000",
  },
];
*/

export const curriculo = {
  name: "Lucas Emanuel Da Silva Ribeiro",
  oficio: "Desenvolvedor Full Stack",
  socials: [
    { title: "Email", value: "lucasemanuel-00000@hotmail.com", link: false },
    { title: "Celular", value: "(74) 9 8118-6884", link: false },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/lucas-ribeiro-2ba4101a2/",
      link: true,
    },
    { title: "Github", value: "https://github.com/Luc-emanuel", link: true },
  ],
};
