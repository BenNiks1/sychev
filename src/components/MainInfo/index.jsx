import React from "react";
import axios from "axios";
import ResumePopup from "../ResumePopup";
import PortfolioPopup from "../PortfolioPopup";

const MainInfo = ({ listItems }) => {
  const [resume, setResume] = React.useState([]);
  const [portfolioPopup, setPortfolioPopup] = React.useState([]);

  React.useEffect(() => {
    axios.get("./db.json").then((res) => {
      setResume(res.data.resume);
      setPortfolioPopup(res.data.portfolio)
    });
  }, []);
  return (
    <div className="main__info">
      <h1 className="main__info-title">Bogdan Sychev</h1>
      <p className="main__info-description">
        My name is Bogdan Sychev. <br />I am junior frontend developer
      </p>

      <ul className="main__info-list">
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
        <ResumePopup subnav={resume} />
        <PortfolioPopup subnav={portfolioPopup} />
      </ul>
    </div>
  );
};

export default MainInfo;
