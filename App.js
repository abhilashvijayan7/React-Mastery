
import React from "react";
import  ReactDOM   from "react-dom/client";

// React Element

const heading= (
<h1 className="head" tabIndex="5">
    react i am ok
    </h1>
    );

    const Subhead=()=>(
<h3 className="sub-head">My name is abhilash M</h3>
    );

// React Functional Component

 const HeadingComponent = ()=>{
    return (
       <>
       <div id='container'>
      <Subhead/>
      {Subhead()}
         {heading} 
         
    <h1 className="head" >
    react i am cool
    </h1>
       </div>
    </> 
    )
 }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>); 