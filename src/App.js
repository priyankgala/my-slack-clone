import React from "react"
import './App.css';
import Header from "./myComponents/HeaderComponent";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <h1>Hello World!!</h1>
      <Header />
      {/* Header component */}
      {/* Sidebar component */}
      {/*React router -> chat screen area*/}


    </div>
  );
}

export default App;
