import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';


const Home = (props) => {
  const navigate = useNavigate();
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
          Button to Calculator<br/>
         <button
         style={{width: 100, textAlign: 'center', fontSize: 17, padding: 4}}
         onClick = {() => {
          navigate('/calculator');
         }}>
         Go to Calculator</button>
         </p>
       </header>
     </div>
   );
 }

 export default Home;





// import logo from './logo.svg';
// import './App.css';
// import { useNavigate } from 'react-router-dom';

// const Home = (props) => {
//   const navigate = useNavigate();
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//          <button
//          onClick = {() => {
//           navigate('/calculator');
//          }}>
//          Go to Calculator</button>
//          </p>
//        </header>
//      </div>
//    );
//  }

//  export default Home;
