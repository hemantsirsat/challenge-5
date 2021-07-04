import './App.css';
import bgtopdesktop from "./components/images/bg-pattern-top-desktop.svg";
import bgbottomdesktop from "./components/images/bg-pattern-bottom-desktop.svg";
import bgtopmobile from "./components/images/bg-pattern-top-mobile.svg";
import bgbottommobile from "./components/images/bg-pattern-bottom-mobile.svg";

import Topsection from "./components/Topsection.js";
import Bottomsection from "./components/Bottomsection.js";

function App() {
  return (
    <div className="container">
      <img 
        src={bgtopdesktop}
        alt="desktop top"
        className="desktop-top"
      />
      <img 
        src={bgtopmobile}
        alt="mobile top"
        className="mobile-top"
      />
        <div className="main-content">
          <Topsection />
          <Bottomsection />
        </div>  
      <img 
        src={bgbottomdesktop}
        alt="desktop bottom"
        className="desktop-bottom"
      />
      <img 
        src={bgbottommobile}
        alt="mobile bottom"
        className="mobile-bottom"
      />
    </div>
  );
}

export default App;
