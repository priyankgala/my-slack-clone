import React from "react"
import './App.css';
import Header from "./myComponents/HeaderComponent";
import Sidebar from "./myComponents/Sidebar";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      {/* <h1>Hello World!!</h1> */}
      <Header />

      <div className="app__body">
        <Sidebar />
        {/*React router -> chat screen area*/}
      </div>



    </div>
  );
}

export default App;
