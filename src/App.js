import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './newappfirst.js';
import Calculator from './firstapp';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to ='/calculator'>Calculator</Link>
      </nav>
      <Routes>
      	{/* '/'로 접근할 경우 Home 컴포넌트로 렌더링 */}
        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import './App.css';

// import Home from './newappfirst';
// import Calculator from './firstapp';

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to='/home'>Home</Link>
//         <Link to ='/calculator'>Calculator</Link>
//       </nav>
//       <Routes>
//       	{/* '/'로 접근할 경우 Home 컴포넌트로 렌더링 */}
//         <Route path='/' exact element={<Home />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/calculator' element={<Calculator />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
