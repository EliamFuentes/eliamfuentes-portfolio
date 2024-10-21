import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/img-foto-perfil.jpg';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" >

            <div className="about-text-skills">
              <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá, </p>

                <p className="about-text-p about-text-p-2">meu nome é <span>Eliam Fuentes</span></p>

                <p className="about-text-p about-text-p-3">Sou  estudante de desenvolvimento <span>full-stack</span></p>

                <p className="about-text-p about-text-p-3">As tecnologias que estou utilizando no momento incluem <span>JavaScript</span>, <span>ReactJS</span>, <span>TypeScript</span>, e <span>Sass/CSS</span>, estou constantemente aprimorando minha habilidade em criar interfaces de usuário elegantes e funcionais. Além disso, estou familiarizado com ferramentas essenciais como NodeJS, Bootstrap, SQL e Docker para desenvolvimento de aplicativos robustos</p>

                <p className="about-text-p about-text-p-5">Estou aberto a oportunidades de colaboração, desafios emocionantes e novas conexões na indústria de tecnologia.</p>

                <p className="about-text-p about-text-p-6"><span>Sinta-se à vontade para me chamar para conversar!</span></p>
              </section>
              <div className="about-image">
                <img className="about-img" src={image} alt="profile" />
              </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                  {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                      <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>

          <SocialMedia />
        </section>

      </div>

    )
  }
}