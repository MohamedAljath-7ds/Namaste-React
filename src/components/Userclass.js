import React from "react";

class Userclass extends React.Component{
    //receive a props argument in constructor because we want access the parent class properties and use it wherewere we want by using super(props)
    constructor(props){
        super(props)
        //we want to create a state in constructor
        //this state is a whole big object containing a state variable
        this.state = {
            count:0,
            count2:0,//behind functional component also looking like this react take care of this
            //create a multiple state variable ini functional component 
        }
        console.log(this.props.name + "Child constructor called")
       
    }
    componentDidMount(){
        console.log(this.props.name + "child componentDidMount is called")
    }
    //this refers to current parent class it comes from 
    render(){
        //
        console.log(this.props.name + "Child render is called")
        //destructuring it for look good
        const{name} = this.props;
        const{count} = this.state;
        
        return(
            <div className="user-card">
            <h1>count = {count}</h1>
            <button onClick={() => {
                this.setState({
                    count:count+1,
                })
            }}>count increase</button>
            <h1>{name}</h1>
            <h2>Location</h2>
            <h4>contact@aljath</h4>
        </div>
        );
    };
};

export default Userclass;