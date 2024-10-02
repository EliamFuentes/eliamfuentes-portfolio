import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/components/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section className="social-media">
      <a href="https://www.linkedin.com/in/eliamfuentes/" target="_blank" rel="noopener noreferrer">
        <Icon icon="akar-icons:linkedin-fill" />
      </a>
      <a href="https://github.com/EliamFuentes" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:github" />
      </a>
      <a href="mailto:eliamfuentes123@gmail.com" target="_blank" rel="noopener noreferrer" >
        <Icon icon="ant-design:mail-outlined" />
      </a>
    </section>
  )
}
