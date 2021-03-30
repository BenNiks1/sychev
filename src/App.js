import React from "react";
import axios from "axios";
import {MainInfo} from "./components/MainInfo";
export const App= ()=> {

  const [resumePopup, setResume] = React.useState([]);
  const [portfolioPopup, setPortfolioPopup] = React.useState([]);
  const [listItems, setListItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("./db.json").then((res) => {
      setResume(res.data.resume);
      setPortfolioPopup(res.data.portfolio);
      setListItems(res.data.listItems)
    });
  }, []);
  return (
    <div className="main">
      <MainInfo
        resumePopup={resumePopup}
        portfolioPopup={portfolioPopup}
        listItems={listItems}
      />
  
    </div>
  );
}

