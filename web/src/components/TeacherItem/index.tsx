import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/42036320?s=460&u=55f10377c7f4af34b237c6cf0ca52263ec3d600f&v=4" alt="Ricardo Martins"/>
      <div>
        <strong>Ricardo Martins</strong>
        <span>Web</span>
      </div>
    </header>

    <p>
      qokwernfokaqneo'rkfn'voqjenrfvóijnqerórijfvnóiqernfvókjnqeroírkvnoq
      <br/><br/>
      qdbfvpicjhbqhepiwurhbvcpiuqehwbrwui
    </p>
    <footer>
      <p>
        Preço/Hora
        <strong>R$ 20,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}
export default TeacherItem;