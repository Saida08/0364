import React from "react";

const MyComponentsWithoutJSX=()=>{

}
const MyComponentsWithJSX=()=>{

}
const Myprofile=()=>{

}
function Week1(){
    return(
        <div className="week1">
        <h1>Displaying my components without JSX</h1>
        <MyComponentsWithoutJSX/>
        <hr/> 
        <h1>Displaying my components with JSX</h1>
        <MyComponentsWithJSX/>
        <hr/> 
        <h1>Displaying my profile</h1>
        <Myprofile/>
        
    </div>
    );
}
export default Week1;
