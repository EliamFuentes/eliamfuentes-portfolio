import tryunfo from '../assets/killertrunfo.mp4';
import trybetunes from '../assets/trybetunes.mp4';
import trybewallet from '../assets/TrybeWallet.mp4';
import appDeReceitas from '../assets/app-de-receitas.mp4';
import natours from '../assets/Natours.mp4';
import dragNdrop from '../assets/dragNdrop.mp4';

import imgSecretWord from '../assets/img-secretword.webp';
import imgMalkaComics from '../assets/img-malkaComics.PNG'
import imgMiniBlog from '../assets/img-miniblog.PNG'
import imgSiteMario from '../assets/img-site-mario.png'
import imgMoviesLib from '../assets/img-moviesLib.PNG'


const allProjects = [
  {
    id: 12,
    name: 'Secret Word',
    moduleCourse: 'Front-end',
    img: imgSecretWord,
    linkGitHub: 'https://github.com/EliamFuentes/secretword',
    linkPage: 'https://daniellelsilva.github.io/drag-n-drop/',
    linkVideo: dragNdrop,
    technologies: 'HTML, CSS, React, JSX, JSON',
    text: 'Secret Word é um jogo de advinhar palavras. Desenvolvi durante o curso "React do Zero a Maestria" onde coloquei em prática aprendizados de React, JSX e CSS.'
  },

  {
    id: 11,
    name: 'Malka Comics',
    moduleCourse: 'Full-Stack',
    img: imgMalkaComics,
    linkGitHub: '',
    linkPage: 'https://malkacomics.com',
    linkVideo: natours,
    technologies: 'WordPress, HTML, PHP, CSS, MySQL',
    text: 'Este foi meu primeiro projeto desenvolvido usando o WordPress e outras linguagens. O objetivo do projeto é uma biblioteca virtual de histórias em quadrinho. Cada usuário possui um login para entrar em sua conta e acessar os comics.'
  },

  {
    id: 10,
    name: 'MiniBlog',
    moduleCourse: 'Front-end',
    img: imgMiniBlog,
    linkGitHub: 'https://github.com/daniellelsilva/cook-it',
    linkPage: 'https://daniellelsilva.github.io/cook-it/#/',
    linkVideo: appDeReceitas,
    technologies: 'Hooks, React, JSX, CSS3, HTML5, Firebase',
    text: 'Este foi um projeto que desenvolvido durante o curso "React do Zero a Maestria". O projeto é um blog, com login e cadastro e área do  usuário e lugar para fazer posts no blog.'
  },

  {
    id: 9,
    name: 'Site Mario',
    moduleCourse: 'Front-end',
    img: imgSiteMario,
    linkGitHub: 'https://github.com/daniellelsilva/TrybeWallet',
    linkPage: 'https://daniellelsilva.github.io/TrybeWallet/#/',
    linkVideo: trybewallet,
    technologies: 'CSS, HTML, JAVASCRIPT',
    text: 'Um dos meus primeiros projetos WEB, é um site simples com HTML e CSS do fime SUPER MARIO'
  },

  {
    id: 8,
    name: 'Sistema de Votação ',
    moduleCourse: 'Front-end',
    img: imgMiniBlog,
    linkGitHub: 'https://github.com/daniellelsilva/trybetunes',
    linkPage: 'https://daniellelsilva.github.io/trybetunes/#/',
    linkVideo: trybetunes,
    technologies: 'React, JSX, CSS3, HTML5',
    text: 'A proposta do projeto foi criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.'
  },

  {
    id: 7,
    name: 'Cátalogo de Filmes',
    moduleCourse: 'Front-end',
    img: imgMoviesLib,
    linkVideo: tryunfo,
    linkGitHub: 'https://github.com/daniellelsilva/tryunfo',
    linkPage: 'https://daniellelsilva.github.io/tryunfo',
    technologies: 'React, JSX, CSS3, HTML5',
    text: 'Neste projeto foi desenvolvido um jogo de Super Trunfo. A aplicação possuia tema livre e deveria ser desenvolvido um baralho, sendo possível criar cartas, pré-visualizar a carta, adicionar e remover cartas do baralho, além de possuir três filtros.'
  }
];


export default allProjects;