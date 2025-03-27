import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state ={counter:0,isDis:false}
    }
    incrementData(){
        if(this.state.counter>=5){
            this.setState({msg:"Sorry > 5",isDis:true})
        }
        else{
            this.setState({counter:this.state.counter+1,msg:'',isDis:false})
        }
    }

    decrementData(){
        if(this.state.counter < 0){
            this.setState({msg:"Sorry < 0",isDis:true})
        }
        else{
            this.setState({counter:this.state.counter-1,msg:'',isDis:false})
        }
    }
    

    render(){
        return(<>
            <h1>Counter</h1>
            value is {this.state.counter}
            <br/>
            <input type='button' value="+" onClick={this.incrementData.bind(this)} disabled={this.state.isDis}/>
            <input type='button' value="-" onClick={this.decrementData.bind(this)} disabled={this.state.isDis}/>
            <input type='button' value="x" onClick={()=>this.setState({counter:0,msg:"",isDis: false})}/>
            <p style ={{color:'red'}}>{this.state.msg}</p>
        </>)
    }
}
 export default Counter