import React from "react";

const MainContent = () => {
  return (
    <div className="mainContentContainer">
      <h1>Pedro Paças</h1>
      <h2>Frontend Developer</h2>
      <h3>
        <a href="https://pedropacas.netlify.app/">pedropacas.netlify.app</a>
      </h3>
      <div className="email">
        <img src="./images/icon.png" alt="icon" className="icon" />
        <a href="mailto: pndspacas@gmail.com">
          <h3 className="headerEmail">Email</h3>
        </a>
      </div>
      <main>
        <h4>About</h4>
        <p>
          My name is Pedro Paças. A Frontend Developer with a need to know what
          is on demand, to get the most out of each technology, and to create
          something valuable to apply my skills.
        </p>
        <h4>Projects</h4>
        <p>
          <a href="https://favanimes.netlify.app/index.html">Anime List</a>
        </p>
        <p>
          <a href="https://card-game-api.netlify.app/">The Shuffler Game</a>
        </p>
        <p>
          <a href="https://github-stalker-api.netlify.app/">Github Stalker</a>
        </p>
        <p>
          <a href="https://happy-notes-react.netlify.app/">Happy Notes</a>
        </p>
      </main>
    </div>
  );
};

export default MainContent;
