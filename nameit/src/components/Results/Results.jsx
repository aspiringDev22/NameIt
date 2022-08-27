// import React from "react";
// import "./Results.css";

// const urlName = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B'

// const Results = ({ suggestedName }) => {
//   // const suggestedNames = suggestedName.map(name => {
//   //   return <p>{suggestedName}</p>
//   // } )
//   return (
    
//       <div className="result-container">
//         {suggestedName.map((name) => {
//           return (
//             <a className="link" href={`${urlName}${name}`} target="_b">
//             <p className="result-name" key={name}>
//               {name}
//             </p>
//              </a>
//           );
//         })}
//       </div>
//   );
// };

// export default Results;

import React from 'react'
import './Results.css'

const url = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B'


const Results = ({suggestedName}) => {
  return (
    <div className='result-container'>
      {suggestedName.map((name)=>{
        return (
          <a href={`${url}${name}`} className="link">
            <p className='result-name' key={name}>{name}</p>
          </a>
        )
      })}
      
    </div>
  )
}


export default Results
