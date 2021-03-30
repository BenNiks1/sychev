import React from "react";
import { ResumePopup } from "../ResumePopup";
import { PortfolioPopup } from "../PortfolioPopup";
import { ArcadeCanvas } from "../ArcadeCanvas";

export const MainInfo = ({ listItems, resumePopup, portfolioPopup }) => (
  <div className="main">
    <header className="header container">
      <h1 className="header__title">Bogdan Sychev</h1>
      <ul className="header__list">
        {listItems.map((listItem) => (
          <li className="list-item">
            <a
              className="list-item__link"
              href={listItem.link}
              target={listItem.target}
              rel="noreferrer"
            >
              {listItem.text}
            </a>
          </li>
        ))}
        <ResumePopup subnav={resumePopup} />
        <PortfolioPopup subnav={portfolioPopup} />
      </ul>
    </header>
    <div className="intro container">
      <div className="intro__inner">
        <p className="intro__text">My name is Bogdan Sychev</p>
        <p className="intro__description">I am junior frontend developer</p>
      </div>
      <ArcadeCanvas />
    </div>
  </div>
);
