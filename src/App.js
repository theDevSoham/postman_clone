import RequestBlock from "./components/RequestBlock";
import ResponseBlock from './components/ResponseBlock';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <div className={classes["request-block-cont"]}>
        <RequestBlock />
      </div>
      <div className={classes["response-block-cont"]}>
        <ResponseBlock />
      </div>
    </div>
  );
}

export default App;
