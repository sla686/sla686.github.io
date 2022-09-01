import { useState } from 'react';
import React from 'react';
import Project1 from '../Assets/Images/MarketplaceShops.png';
import Project1Screen from '../Assets/Images/MarketplaceShops(screen).png';
import Project2 from '../Assets/Images/OnlineShop.png';
import Project2Screen from '../Assets/Images/OnlineShop(screen).png';
import Project3 from '../Assets/Images/DigitalLibrary.png';
import Project3Screen from '../Assets/Images/DigitalLibrary(screen).png';
import Project4 from '../Assets/Images/GuessMyNumber.png';
import Project4Screen from '../Assets/Images/GuessMyNumber(screen).png';
import Project5 from '../Assets/Images/PigDiceGame.png';
import Project5Screen from '../Assets/Images/PigDiceGame(screen).png';
import Project6 from '../Assets/Images/TicTacToe.png';
import Project6Screen from '../Assets/Images/TicTacToe(screen).png';

const Item = ({ text, backgroundImage, onPress }) => {
  const itemReveal = (e) => {
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    if (e.target.className === 'window') {
      e.target.style.opacity = 1;
      e.target.nextSibling.classList.remove('animation__out');
      e.target.nextSibling.classList.remove('hidden');
      e.target.nextSibling.classList.add('animation__in');
    } else if (e.target.className === 'item') {
      e.target.childNodes[0].style.opacity = 1;
      e.target.childNodes[1].classList.remove('animation__out');
      e.target.childNodes[1].classList.remove('hidden');
      e.target.childNodes[1].classList.add('animation__in');
    } else if (e.target.classList[0] === 'information') {
      e.target.previousSibling.style.opacity = 1;

      e.target.classList.classList.remove('animation__out');
      e.target.classList.classList.remove('hidden');
      e.target.classList.classList.add('animation__in');
    } else {
      console.log('Error with projects! Sorry :(');
      console.log(e);
    }
  };

  const itemHidden = (e) => {
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    if (e.target.className === 'window') {
      e.target.style.opacity = 0.5;

      e.target.nextSibling.classList.remove('animation__in');
      e.target.nextSibling.classList.add('animation__out');
      e.target.nextSibling.classList.add('hidden');
    } else if (e.target.className === 'item') {
      e.target.childNodes[0].style.opacity = 0.5;

      e.target.childNodes[1].classList.remove('animation__in');
      e.target.childNodes[1].classList.add('animation__out');
      e.target.childNodes[1].classList.add('hidden');
    } else if (e.target.classList[0] === 'information') {
      e.target.previousSibling.style.opacity = 0.5;

      e.target.classList.remove('animation__in');
      e.target.classList.add('animation__out');
      e.target.classList.add('hidden');
    } else {
      console.log('Error with projects! Sorry :(');
      console.log(e);
    }
  };

  return (
    <button
      className="item"
      onMouseEnter={itemReveal}
      onMouseLeave={itemHidden}
      onClick={onPress}
    >
      <div
        className="window"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="information hidden">{text}</div>
    </button>
  );
};

const Modal = ({
  title,
  about,
  picture,
  pictureAlt,
  web,
  webLink,
  onClose,
}) => {
  return (
    <div className="modal">
      <button className="close-modal" onClick={onClose}>
        &times;
      </button>
      <h1 style={{ padding: '20px' }}>{title}</h1>
      <p>{about}</p>
      <a className="modal-link" href={web} target="_blank" rel="noreferrer">
        {webLink}
      </a>
      <img src={picture} alt={pictureAlt} />
    </div>
  );
};

// const ModalNoLink = ({
//   title,
//   about,
//   picture,
//   pictureAlt,
//   picture2,
//   pictureAlt2,
//   onClose,
// }) => {
//   return (
//     <div className="modal">
//       <button className="close-modal" onClick={onClose}>
//         &times;
//       </button>
//       <h1 style={{ padding: '20px' }}>{title}</h1>
//       <p>{about}</p>
//       <img src={picture} alt={pictureAlt} />
//       <img src={picture2} alt={pictureAlt2} />
//     </div>
//   );
// };

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [numberModal, setNumberModal] = useState(0);

  ////Moving header animation - really hard to get it run smoothly...
  // const [translate, setTranslate] = useState(0);

  // let didScroll = false;

  // const scrollInProgress = (e) => {
  //   didScroll = true;
  // };

  // const raf = () => {
  //   if (didScroll) {
  //     let projectScroll = Math.round((window.scrollY - 1800) / 10);
  //     if (projectScroll >= 0.01) projectScroll = 0;
  //     setTranslate(projectScroll);
  //     didScroll = false;
  //   }
  //   requestAnimationFrame(raf);
  // };

  // requestAnimationFrame(raf);
  // window.addEventListener("scroll", scrollInProgress);

  function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 175;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <section className="section">
      <h2 className="section__header reveal">My projects</h2>
      <div className="slider reveal">
        <Item
          text={'Marketplace & Shops'}
          backgroundImage={Project1}
          onPress={() => {
            setNumberModal(1);
            setShowModal(true);
          }}
        />
        <Item
          text={'Online Shop'}
          backgroundImage={Project2}
          onPress={() => {
            setNumberModal(2);
            setShowModal(true);
          }}
        />
        <Item
          text={'Digital Shop API'}
          backgroundImage={Project3}
          onPress={() => {
            setNumberModal(3);
            setShowModal(true);
          }}
        />
        <Item
          text={'Guess My Number'}
          backgroundImage={Project4}
          onPress={() => {
            setNumberModal(4);
            setShowModal(true);
          }}
        />
        <Item
          text={'Pig (Dice Game)'}
          backgroundImage={Project5}
          onPress={() => {
            setNumberModal(5);
            setShowModal(true);
          }}
        />
        <Item
          text={'Tic Tac Toe'}
          backgroundImage={Project6}
          onPress={() => {
            setNumberModal(6);
            setShowModal(true);
          }}
        />
      </div>

      {showModal && numberModal === 1 && (
        <Modal
          title="Marketplace & Shops"
          about="This is my first fullstack project I have ever done! The project is written with MERN stack and TypeScript. The purpose of this project was to learn about building a fullstack web application, as well as designing backend and frontend parts to coordinate with each other. I have improved my skills in React and Material-UI, as well as in Express.js."
          picture={Project1Screen}
          pictureAlt="Project's screenshot"
          web={'https://github.com/sla686/full-stack-online-shop-public'}
          webLink={'GitHib repository link'}
          onClose={() => setShowModal(false)}
        />
      )}

      {showModal && numberModal === 2 && (
        <Modal
          title="Online Shop"
          about="This is one of my frontend projects written with TypeScript, Material-UI, React and Redux. I have used thrid-party API to fetch products and users. Users can sign in and add products to the cart. Thanks to this project, I have improved my skills in frontend development!"
          picture={Project2Screen}
          pictureAlt="Project's screenshot"
          web={'https://github.com/sla686/frontend-online-shop'}
          webLink={'GitHib repository link'}
          onClose={() => setShowModal(false)}
        />
      )}

      {showModal && numberModal === 3 && (
        <Modal
          title="Digital Library API"
          about="This is a group backend project written with TypeScript, Node.js and Express.js. API documentation is created with Swagger. We have created a digital library API which consists of different schemas such as users, books and authors. These schemas are connected to each other. Thanks to this project we have improved our skills and knowledge in backend technologies and development"
          picture={Project3Screen}
          pictureAlt="Project's screenshot"
          web={'https://github.com/sla686/backend-online-library'}
          webLink={'GitHib repository link'}
          onClose={() => setShowModal(false)}
        />
      )}

      {showModal && numberModal === 4 && (
        /* <ModalNoLink
          title="Joke API!"
          about="I have created this project as a part of the course assignment in my university. This project is related to the back-end technologies and is installed from 'docbox' project. I have also tried to connect a dedicated SQL server with my application so that API requests work and the app responds with the appropriate data. The project is not hosted on the Internet!"
          picture={Project4Code}
          picutureAlt="Joke API code screenshot"
          picture2={Project4Page}
          pictureAlt2="Joke API page screenshot"
          onClose={() => setShowModal(false)}
        /> */
        <Modal
          title="Guess my number!"
          about="This is one of my first JavaScript projects! Here I have created the app where you can try to guess the random chosen number. Responsiveness included!"
          picture={Project4Screen}
          pictureAlt="Guess my number screenshot"
          web={'https://guessmynumber-sla686.netlify.app/'}
          webLink={"Project's link"}
          onClose={() => setShowModal(false)}
        />
      )}

      {showModal && numberModal === 5 && (
        <Modal
          title="Pig (Dice Game)!"
          about='This is also one of my first JavaScript projects. Here I have created a popular dice game called "Pig". Responsiveness included!'
          picture={Project5Screen}
          pictureAlt="Pig (dice game) screenshot"
          web={'https://pigdicegame-sla686.netlify.app/'}
          webLink={"Project's link"}
          onClose={() => setShowModal(false)}
        />
      )}

      {showModal && numberModal === 6 && (
        <Modal
          title="Tic Tac Toe!"
          about="This is one of my first React projects. Thanks to the React documentation, I have successfully created 'Tic Tac Toe' game. There are different components and helper functions which together create the game. "
          picture={Project6Screen}
          pictureAlt="Tic Tac Toe screenshot"
          web={'https://tictactoe-sla686.netlify.app/'}
          webLink={"Project's link"}
          onClose={() => setShowModal(false)}
        />
      )}

      {showModal && (
        <div className="overlay" onClick={() => setShowModal(false)}></div>
      )}
    </section>
  );
};

export default Projects;
