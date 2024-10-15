import videoListaTarefas from '../assets/video-lista-tarefas.mp4'
import videoMoviesLib from '../assets/video-moviesLib.mp4'

import imgSecretWord from '../assets/img-secretword.webp';
import imgMalkaComics from '../assets/img-malkaComics.PNG'
import imgMiniBlog from '../assets/img-miniblog.PNG'
import imgSiteMario from '../assets/img-site-mario.png'
import imgMoviesLib from '../assets/img-moviesLib.PNG'
import imgListaTarefas from '../assets/img-lista-tarefas.PNG'


const allProjects = [
  {
    id: 12,
    name: 'Secret Word',
    moduleCourse: 'Front-end',
    img: imgSecretWord,
    linkGitHub: 'https://github.com/EliamFuentes/secretword',
    linkPage: 'https://secretword-bay.vercel.app',
    linkVideo: '',
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
    linkVideo: '',
    technologies: 'WordPress, HTML, PHP, CSS, MySQL',
    text: 'Este foi meu primeiro projeto desenvolvido usando o WordPress e outras linguagens. O objetivo do projeto é uma biblioteca virtual de histórias em quadrinho. Cada usuário possui um login para entrar em sua conta e acessar os comics.'
  },

  {
    id: 10,
    name: 'MiniBlog',
    moduleCourse: 'Front-end',
    img: imgMiniBlog,
    linkGitHub: 'https://github.com/EliamFuentes/miniblog',
    linkPage: 'miniblog-flax.vercel.app',
    linkVideo: '',
    technologies: 'Hooks, React, JSX, CSS3, HTML5, Firebase',
    text: 'Este foi um projeto que desenvolvido durante o curso "React do Zero a Maestria". O projeto é um blog, com login e cadastro e área do  usuário e lugar para fazer posts no blog.'
  },

  {
    id: 9,
    name: 'Site Mario',
    moduleCourse: 'Front-end',
    img: imgSiteMario,
    linkGitHub: '',
    linkPage: '',
    linkVideo: '',
    technologies: 'CSS, HTML, JAVASCRIPT',
    text: 'Um dos meus primeiros projetos WEB, é um site simples com HTML e CSS do fime SUPER MARIO'
  },

  {
    id: 8,
    name: 'Lista de Tarefas',
    moduleCourse: 'Front-end',
    img: imgListaTarefas,
    linkGitHub: 'https://github.com/EliamFuentes/lista-tarefas',
    linkPage: 'https://lista-tarefas-eqbczy1zn-eliams-projects.vercel.app',
    linkVideo: videoListaTarefas,
    technologies: 'React, JSX, CSS3, HTML5',
    text: 'A proposta do projeto foi práticar conceitos do React, como hooks, filtros e validações. O projeto é uma lista de tarefas onde é possível adicionar, remover e completar tarefas, filtar por tarefas completas, incompletas e por todas, pesquisar tarefas e ordenar por ordem alfabética.'
  },

  {
    id: 7,
    name: 'Cátalogo de Filmes',
    moduleCourse: 'Front-end',
    img: imgMoviesLib,
    linkVideo: videoMoviesLib,
    linkGitHub: 'https://github.com/EliamFuentes/movies_lib',
    linkPage: 'https://movies-lib-three-tau.vercel.app',
    technologies: 'React, JSX, CSS3, HTML5, API',
    text: 'MovieLib é um catálogo de filmes criado utilizando a API do TMDB, onde é possível buscar filmes e suas descrições.'
  }
];


export default allProjects;