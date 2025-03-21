import React from 'react'
import UserClass from './UserClass'

class About extends React.Component{
  constructor(props){
    super(props);

    //console.log("Parent Constructor")
  }
  render(){
    //console.log("Parent Render")
    return(
      <div>
        <h1>About Class!!</h1>
        <h2>Me I guess</h2>
        {/* <User name={"Akshay Saini (function)"}/> */}
  
        <UserClass name={"First"} location={"Deharadun Class"}/>
        
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About !!</h1>
//       <h2>Me I guess</h2>
//       {/* <User name={"Akshay Saini (function)"}/> */}

//       <UserClass name={"Akshay Saini (Class)"} location={"Deharadun Class"}/>
//     </div>
//   )
// }

export default About