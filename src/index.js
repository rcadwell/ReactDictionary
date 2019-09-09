import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [word, setWord] = React.useState("");


const handleSubmit = e => {
  e.preventDefault()
  fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/$')
}

  return (
    <div className="App">
      <form> onSubmit=[handleSubmit]>
        <input 
        type="text" 
        placeholder="word"
        value={word}
        onChange=[e => setWord(e.target.value)]
      />
      <button>Define</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
