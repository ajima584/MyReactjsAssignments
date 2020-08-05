import React from 'react';
import logo from './logo.svg';
import './App.css';
import m21 from './m21.jpg';
import m30 from './m30.jpg';
import m31 from './m31.jpg';
import note7 from './note7.jpg';
import note8 from './note8.jpg';
import note9 from './note9.jpg';
import iphone6s from './iphone6s.jpg';
import iphone7 from './iphone7.jpg';
import iphone8 from './iphone8.png';
import data from './data/data.json';
import About from './components/About.js';
import { BrowserRouter ,Route ,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <h1>Mobile Phones</h1>
       <BrowserRouter>
        <Route exact path="/" component={CardView} />
        <Route exct path="/about" component={About} />

      </BrowserRouter>
    </div>
  );
}
let CardView=()=>{
  let profileData=data.details;
  console.log(profileData);
   let images=[m30,m30,m30,note9,note8,note9,iphone6s,iphone7,iphone8];
  return(
  <div className="row justify-content-center">
    {profileData.map((cardsData,index)=>(
      <div className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
        <div className="card ">
          <div className="card-body">
            <img src={images[index]} alt="mobile img" style={{width:"50%"}}/>
            <h2>Name: {cardsData.mobile.name}</h2>
            <h3 className="text-secondary">price: {cardsData.mobile.price}</h3>
            <h3 >Storage:{cardsData.mobile.storage}</h3>
            <h3>Battery:{cardsData.mobile.Battery}</h3>
            <Link to= {{pathname:'/about',data1:{id:index}}} className="btn btn-primary">OverView</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default App;
