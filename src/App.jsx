import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './commonPages/LogIn/Login'
import Dashboard from './commonPages/Dashboard/Dashboard'
import ChatBot from './commonPages/ChatBot/index'


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              {/* <Route path="/register" component={RegisterForm} /> */}
              <Route path="/dashboard" element={<Dashboard/>} />
              {/* <Route path="/" exact component={LoginForm} /> */}

              <Route path="/chat" element={<ChatBot/>} />
          </Routes>
      </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <Dashboard />
//       {/* <Login /> */}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

