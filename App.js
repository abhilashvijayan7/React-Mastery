
import React from "react";
import  ReactDOM   from "react-dom/client";

// React Element

const heading= (
<h1 className="head" tabIndex="5">
    react i am ok
    </h1>
    );

// React Functional Component

 const HeadingComponent = ()=>{
    return (
       <>
    <h1 className="head" tabIndex="5">
    react i am cool
    </h1>
    </> 
    )
 }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>); 