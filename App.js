import logo from './logo.svg';
import clsx from 'clsx'
import { useRef } from "react";
import {Routes, Route, Link } from 'react-router-dom';
import Video from "./Video";
import Home from "./Page/Home";
import News from "./Page/News";
import Contact from "./Page/Contact";
import style from './App.module.css';
import Image from './Image'

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

function App() {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
    videoRef.current.log();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className={clsx(style.App)}>
      <img
        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
        alt="tiktoklogo"
      />
      <h2 className={clsx(style.heading)}>Chị ấy vẫn cười đc khi bị kết án “tử hình”</h2>
      <Video ref={videoRef} />
      <br />
      <button onClick={handlePlay}>PLAY</button>
      <button onClick={handlePause}>PAUSE</button>
      <Image/>
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME PAGE</Link>
          </li>
          <li>
            <Link to='/news'>NEW PAGE</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT PAGE</Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}


export default App;
