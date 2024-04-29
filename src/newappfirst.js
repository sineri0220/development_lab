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
         <button
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
