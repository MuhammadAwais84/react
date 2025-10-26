import Logic from "./logic.jsx"
import "./App.css"; // 👈 light mode version CSS
function CounterApp() {
  
const { Num,shake,animate, increase, decrease, reset } = Logic();

  



  return (
    <div className={`counter-app ${shake}`}>
      <h1 className={`title`}>Counter App</h1>

      <div className="display">
        <span className={`number ${animate}`}>{Num}</span>
      </div>

      <div className="buttons">
        <button className="btn decrease" onClick={function() {
          decrease();
        }}>
          −
        </button>
        <button className="btn increase" onClick={function(){
          increase();
        }}>
          +
        </button>
      </div>
      <button className="btn" onClick={function () {
        reset()
      }}>
        x
      </button>
    </div>
  );
}

export default CounterApp;
