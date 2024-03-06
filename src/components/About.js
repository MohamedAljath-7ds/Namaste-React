

import React from "react";
import Usercontext from "../utils/Usercontext";

//class based component (parent componenent)
// when you have the child class based component inside it means your parent constructor called and render called while calling render the line where your child class is initiated then it will then go to the child class and called constructor and called render 
// the ans would be Parent constructor called => parent render is called => child constructor is called => child render is called => child component is called => parent component is called so the component mount is called afetr the render method is fully completer or may be say render or we say applied into the dom

class About extends React.Component{


  constructor(props){ //whenever the class based component is initiated the constructor is called and the parent class has some properties in constructor so thats why we use same property here by using constructor
    super(props)//super() is used to access the parent class properties method inside the wherever we want thats why it always important to put
    this.state = {
      Userinfo:{
    
      }
    }
    console.log("constructor is called")
  }
  //This is the method that given to us by parent class it works like useEffect in functional component after component render the useEffect is called like this componentdidMout() is called after the render method is fully finished this is how the class based component life cycle works
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/MohamedAljath-7ds");
    const json = await data.json();
    console.log(json)
    this.setState({
      Userinfo:json,
    });
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    console.log("component will unmount")
  }
  render(){
    console.log("render is called")
    // the class based life cycle goes like this constructor is called after the render method is called
    const{name , avatar_url, login} = this.state.Userinfo;
    
    return(
      <div>
        <img src={avatar_url} style={{width:"100px",borderRadius:"50%"}}/>
        <h2>Name : {name}:</h2>
        <h3>login : {login}</h3>
        <Usercontext.Consumer >
        {({loggedIn}) => <h1>{loggedIn}</h1>}
        </Usercontext.Consumer>
        
    </div>
    );
  };
  
};





export default About;