import React, {useState} from 'react';

import './App.css';


function Calculator(){
   
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operator, setOperator] = useState("");
  
        
    let result = 0;        
    if (operator === '+'){
        result = Number(number) + Number(number2)
        
    } else if (operator === '-'){
        result = Number(number) - Number(number2)
        
    } else if (operator === '*'){
        result = Number(number) * Number(number2)
       
    } else if (operator === '/'){
        result = Number(number) / Number(number2)
        
    }
    // !!!질문!!!  
     // 질문!! 왜 함수로 한꺼번에 정의하면 오류뜨지..===는 위치로 비교하는거라면서 false밖에 안나온다고 했음
    // 그리고 String.equals(st1, st2) 이용하면 오류 뜨나?
    // 함수 안에서 실행했을 때는 그건 function이 아니라면서 오류뜨던데..(근데 애초에 왜 function이어야함?)

  return (
    <div className="App">
      <header className="App-header">
    
        <h1>Calculating two numbers</h1>
        <div className="Input-numbers">
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
            {/* <input type="text" value={operator} onChange={e => setOperator(+e.target.value)}/> */}
            <input type="text" value={operator} onChange={e => setOperator(e.target.value)}/>
            <input type="number" value={number2} onChange={e => setNumber2(e.target.value)}/>
        </div>
        {/* <button onClick={calculate({operator})}>Calculate</button> */}
        <h2>Rendered</h2>
        <h3>{number} {operator} {number2}={result}</h3>

        <p>
          {/* Edit <code>src/App.js</code> and save to reload.<br/><br/>
          Get inputs<br/> */}
          {/* {inputValue}
          <input type="number" name="oper"></input>
          <input type="text" name="oper"></input>
          <input type="number" name="second"></input> */}
        </p>
       
      </header>
    </div>
  );

};
export default Calculator;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
