import React, { useState } from "react";

import Header from "./containers/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./containers/Footer/Footer";

import './App.css';
import Homepage from "./containers/Homepage/Homepage";

function App() {
  const [score,setScore]=useState(0);
  return (
    <div className="App">
      <Header score = {score}/>
      <Layout>
        <Homepage/>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
