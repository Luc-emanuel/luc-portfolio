//
import imageMe from "../assets/images/me.jpg";
import curriculo from "../assets/documents/curriculo.pdf";
import gea1 from "../assets/images/projects/gea/img1.png";
import gea2 from "../assets/images/projects/gea/img2.png";
import ynpr1 from "../assets/images/projects/ynpr/img1.png";
import ynpr2 from "../assets/images/projects/ynpr/img2.png";
import ynpr3 from "../assets/images/projects/ynpr/img3.png";
import ynpr4 from "../assets/images/projects/ynpr/img4.png";
import relds1 from "../assets/images/projects/relds/img1.png";
import reload1 from "../assets/images/projects/reload/img1.png";
import reload2 from "../assets/images/projects/reload/img2.png";

export const home = {
  image: imageMe,
  name: "Lucas Emanuel",
  pais: "Brasil",
  city: "Juazeiro",
  age: "16-07-1997",
  oficio: "Software Developer",
  study: "Biotechnology Student",
  email: "lucasemanuel-00000@hotmail.com",
  socials: [
    "https://www.linkedin.com/in/lucas-emanuel-2ba4101a2/",
    "https://github.com/Luc-emanuel",
    "https://www.instagram.com/lucasr01123/",
  ],
  cv: curriculo,
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
      value: "https://www.linkedin.com/in/lucas-emanuel-2ba4101a2/",
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

export const infoHistory = {
  education: [
    {
      title: "Universidade do Estado da Bahia",
      subtitle: "Bacharelado",
      date: "Março 2019 - presente",
      points: [
        "Guiando minha graduação com foco em genética",
        "Ajudando outros alunos com seus estudos",
        "Desenvolvendo ideias na área de biotecnologia",
      ],
      techs: [],
    },
  ],
  work: [
    {
      title: "Freelancer - Autônomo",
      subtitle: "Desenvolvedor Full Stack",
      date: "Dezembro 2022 - presente",
      points: [
        "Desenvolvimento de aplicações web e mobile",
        "Projetos de back-end e front-end",
        "Melhorias em aplicações já existentes",
        "Soluções personalizadas",
      ],
      techs: [
        "Python",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "MySQL",
        "AWS",
        "Jest",
        "Docker",
        "Git",
        "Scrum",
      ],
    },
    {
      title: "Reload Health",
      subtitle: "Desenvolvedor Front-end",
      date: "Julho 2022 - Dezembro 2022",
      points: [
        "Desenvolvendo aplicações front-end",
        "Otimizando performance geral nas páginas",
        "Reestruturação do código para melhor manutenção",
      ],
      techs: [
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "Docker",
        "Git",
        "Scrum",
      ],
    },
    {
      title: "TakaTraining",
      subtitle: "Desenvolvedor Front-end",
      date: "Dezembro 2020 - Abril 2022",
      points: [
        "Desenvolvimento de aplicações web e mobile",
        "Refatoração de sites",
        "Otimização",
        "Aplicações PowerApps",
      ],
      techs: [
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "PowerApps",
        "AWS",
        "Azure",
        "Jest",
        "Git",
        "Scrum",
      ],
    },
    {
      title: "Freelancer - ClassX",
      subtitle: "Desenvolvedor Full Stack",
      date: "Fevereiro 2019 - Dezembro 2020",
      points: [
        "Desenvolvimento de aplicações web e mobile",
        "Projetos de back-end e front-end",
        "Melhorias em aplicações já existentes",
        "Soluções personalizadas",
      ],
      techs: [
        "Python",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "PHP",
        "Laravel",
        "MongoDB",
        "MySQL",
        "AWS",
        "Jest",
        "Git",
        "Scrum",
      ],
    },
  ],
};

export const projects = [
  {
    id: 0,
    title: "Kpsule",
    subtitle: "Landing Page",
    desc: "A Reload Health está desenvolvendo um produto, o Kpsule, no tempo que atuei na Reload o primeiro projeto foi implementar a landing page do Kpsule, assim foi feito. O site foi desenvolvido com ReactJS, possuindo responsividade e internacionalização. Atuando como a porta de entrada, o chamariz para o seu Quiz, foi um projeto muito interessante para mim devido a ligação com a biotecnologia, uma área de estudo minha.",
    details: [
      { title: "Início", value: "Agosto 2022" },
      { title: "Fim", value: "Outubro 2022" },
      { title: "Status", value: "Concluído" },
      {
        title: "Cliente",
        value: "Reload Health",
        link: "https://www.linkedin.com/company/reload-health/",
      },
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "NodeJS",
      "Git",
    ],
    url: "https://kpsule.co",
    imgs: [reload1],
  },
  {
    id: 1,
    title: "Kpsule Quiz",
    subtitle: "Quiz",
    desc: "A Reload Health está desenvolvendo um produto, o Kpsule, após desenvolver a Landing Page do Kpsule, passei a atuar na melhoria da performance do Quiz, onde redesenhei quase que totalmente o front-end para essa melhoria. Novas estruturas e organização para otimizar o processo e também melhorar a manutenção do código, visando o futuro. Bugs resolvidos que impactavam e muito na usabilidade e performance.",
    details: [
      { title: "Início", value: "Setembro 2022" },
      { title: "Fim", value: "Dezembro 2022" },
      { title: "Status", value: "Concluído" },
      {
        title: "Cliente",
        value: "Reload Health",
        link: "https://www.linkedin.com/company/reload-health/",
      },
    ],
    technologies: ["JavaScript", "ReactJS", "NodeJS", "Git"],
    url: "https://quiz.kpsule.co/",
    imgs: [reload2],
  },
  {
    id: 2,
    title: "GEA Sistemas",
    subtitle: "Sistema de gerenciamento de orçamentos e revisões",
    desc: "A GEA possui revendedores de seus produtos (bombas de leite, teteiras, etc..) que visitam fazendeiros e fazem seus orçamentos, isso tudo sendo no papel mesmo, onde era necessário apresentar diversas opções ao cliente por meio de papel. Então a ideia foi botar online esse sistema para gerar um orçamento e também o gerenciamento das manutenções/trocas períodicas. Assim foi desenvolvido um sistema online, onde o revendedor, estando na fazenda com uma conexão com internet acessa o sistema e pode fazer seus orçamentos tranquilamente, com todos os produtos a um clique, e podendo gerenciar as revisões, manutenções e trocas. O projeto foi 100% desenvolvido por mim, backend, frontend, design, banco de dados e cloud.",
    details: [
      { title: "Início", value: "Janeiro 2021" },
      { title: "Fim", value: "Abril 2022" },
      { title: "Status", value: "Concluído" },
      {
        title: "Cliente",
        value: "GEA",
        link: "https://www.linkedin.com/company/geagroup/",
      },
    ],
    technologies: [
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "JWT",
      "Azure",
      "Git",
    ],
    url: "https://geasistemas.azurewebsites.net/",
    imgs: [gea1, gea2],
  },
  {
    id: 3,
    title: "RELDS - API",
    subtitle: "APIs",
    desc: "Uma vez presenciei algo intrigante, as lojas flutando o preço em poucos minutos para se passar por promoção, tudo bem, nao é errado. Só que eu queria ter algo meu que me mostra-se que os preços estão bons mesmo ou não, pegando todas as flutuações e listando pra mim. Assim fiz a base de uma API de scrap na Kabum (o driver de outras lojas estão em desenvolvimento), funcionando bem. O projeto funciona muito bem, me retornando os preços e salvando num banco de dados, onde posso fazer o que quiser com eles. Um front que exiba isso por exemplo.",
    details: [
      { title: "Início", value: "Junho 2022" },
      { title: "Fim", value: "--" },
      { title: "Status", value: "Em progresso" },
    ],
    technologies: ["Python", "MongoDB", "Git"],
    url: "https://github.com/Luc-emanuel/relds",
    imgs: [relds1],
  },
  {
    id: 4,
    title: "YNP rGame",
    subtitle: "Game em JavaScript",
    desc: "Eu estava pensando em fazer um joguinho visualmente simples mas que tivesse uma pegada de competição para prender o pessoal ali com seus amigos, amigos amam competir. Dai fiz esse game, que basicamente consiste em após fazer a preparação você escolhe um número e clica nele, após isso os números ficam mudando e você tem que procurar clicar no número que você escolheu, quão mais rápido for, mais pontos, mas cuidado, a punição por clicar errado é hard.",
    details: [
      { title: "Início", value: "Novembro 2022" },
      { title: "Fim", value: "Dezembro 2022" },
      { title: "Status", value: "Concluído" },
    ],
    technologies: ["JavaScript", "ReactJS", "NodeJS", "Git"],
    url: "https://luc-emanuel.github.io/YNP-r/",
    imgs: [ynpr1, ynpr2, ynpr3, ynpr4],
  },
];
