//
import imageMe from "../assets/images/me.jpg";
import imageGea from "../assets/images/projects/gea.png";
import imageYNPR from "../assets/images/projects/ynpr.png";
import imageAPI from "../assets/images/projects/api.png";

export const dataCards = {
  person: {
    image: imageMe,
    name: "Lucas Ribeiro",
    oficio: "Desenvolvedor Full Stack",
    frase: "Bora codar!",
    email: "lucasemanuel-00000@hotmail.com",
    socials: [
      "https://www.linkedin.com/in/lucas-ribeiro-2ba4101a2/",
      "https://github.com/Luc-emanuel",
    ],
    rodape1: "Sobre mim",
    rodape2: "Meus projetos",
  },
};

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
