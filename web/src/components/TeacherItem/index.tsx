import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/20467588?s=460&u=020f0006be276a09357a1df9826ae2117049ff1c&v=4"
          alt="Marcos Felipe"
        />
        <div>
          <strong>Marcos Felipe</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum
        sem, dignissim ornare commodo et, condimentum ac mi. Suspendisse in arcu
        ut lectus dapibus ornare at quis mi.<br></br>
        <br></br> Nulla elementum ex at ante vulputate, eget efficitur felis
        aliquet. Nulla facilisi. Vivamus interdum quam sit amet pulvinar
        rhoncus.
      </p>

      <footer>
        <p>
          Preço/Hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
