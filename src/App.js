import React from "react";
import ArcadeCanvas from "./components/ArcadeCanvas";
import MainInfo from "./components/MainInfo";
function App() {
  return (
    <div className="main">
      <ArcadeCanvas />
      <MainInfo
        listItems={[
          {
            text: "GitHub",
            link: "https://github.com/BenNiks1",
            target: "_blank",
          },
          {
            text: "Write an email",
            link: "mailto:benxmr@gmail.com",
            target: "",
          },
        ]}
      />
    </div>
  );
}

export default App;
