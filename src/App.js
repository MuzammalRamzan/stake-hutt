import './App.css';
import logo from "./Assets/Stake Hutt.png"

function App() {
  return (
    <div className="bg" >
      <div> 
      <img src={logo} alt="logo" className="imagelogo" />
      </div>
      <div>
        <svg>
          <text x="50%" y="60%" text-anchor="middle"  >
            Comming Soon...
          </text>
        </svg>
      </div>
      <div className="social-media">
        <a href="https://twitter.com/StakingHutt">Twitter</a>
        <a href="https://t.me/StakeHuttOfficial">Telegram</a>
        <a href="https://medium.com/@StakingHutt">Medium</a>
      </div>
    </div>
  );
}

export default App;
