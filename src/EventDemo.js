import React from "react";
class EventDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    btnUpdate(e){
        console.log(e.type)
        console.warn(e.target.name)
        console.error(e.target.value)
    }
    render(){
        return (<>
            <h2>Event Demo</h2>
            <input type="text" name="txt1" onChange={this.btnUpdate.bind(this)}/>
            <input type="text" name="txt2" onChange={this.btnUpdate.bind(this)}/>
            <input type="text" name="btn1" onClick={this.btnUpdate.bind(this)} value="Click1"/>
            <input type="text" name="btn2" onClick={this.btnUpdate.bind(this)} value="Click2"/>
            </>)
    }
    }
export default EventDemo