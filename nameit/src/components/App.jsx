import React, { useState } from "react";
import './App.css'
import Header from '../components/Header/Header'
import SearchBox from '../components/Searchbox/SearchBox'
import Results from "./Results/Results";

const name = require("@rstacruz/startup-name-generator")

function App(){
  const [headerExpanded,setHeaderExpanded] = useState(true);
  const [suggestedName,setSuggestedName] = useState([])

const handleInputChange=(inputTxt)=>{
     setHeaderExpanded(!inputTxt);
     if(inputTxt===''){
      setSuggestedName([])
     }else{
      setSuggestedName(name(inputTxt))
     }
}

  return(
    <>
    <Header headerExpanded={headerExpanded}/>
    <SearchBox handleInputChange={handleInputChange}/>
    <Results suggestedName={suggestedName}/>
    </>
  )
}

export default App;