import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import cv from '../assets/Curriculo_Eliam_Fuentes.pdf'
import { Icon } from '@iconify/react';

import '../styles/pages/home.scss';

export default class Home extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className='all-home'>
        <Header />
        <div className="home">
          <section className="home-section home-text-animation">
            <p className="home-name-1">Eliam</p>
            <p className="home-name-2">Fuentes</p>
            <div className="home-subtitle">
              <p className="home-subtitle-1">Desenvolvedor front-end</p>
            </div>
            <div className='home-curriculum'>
              <button className='home-curriculum-button'>
                <a href={cv} download='Curriculo_Eliam_Fuentes'>Baixar CV <Icon icon="la:download" /></a>
              </button>
            </div>
          </section>
          <SocialMedia />
        </div>
      </div>

    )
  }
}
