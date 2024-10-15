import React from "react";
import { Icon } from '@iconify/react';
import '../styles/components/footer.scss';

import cv from '../assets/Curriculo_Eliam_Fuentes.pdf'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className='home-curriculum'>
          <button className='home-curriculum-button'>
            <a href={cv} download='Curriculo_Eliam_Fuentes'>Baixar CV <Icon icon="la:download" /></a>
          </button>
        </div>
      </footer>
    )
  }
}

export default Footer