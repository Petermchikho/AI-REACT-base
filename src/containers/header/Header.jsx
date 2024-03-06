import React from 'react';
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT3 OpenAI
        </h1>
        <p>Let's Build Something amazing with GPT3 OpenAI Let's Build Something amazing with GPT3 OpenAI Let's Build Something amazing with GPT3 OpenAI</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address"/>
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Let's Build Something amazing with GPT3 OpenAI</p>

        </div>
        

      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
      
    </div>
  )
}

export default Header