import React from "react";
class Sumdemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    onChangeText(e){
        this.setState({[e.target.name]:e.target.value})
    }
   dosum(){
    var a = this.state.txt1
    var b = this.state.txt2
    var c =parseInt(a) + parseInt(b)
    this.setState({ans: "sum is "+ c})
   }
   render(){
    return(
        <>
            <h1>Sum</h1>

        No1 : <input type="txt1" name="txt1" onChange={this.onChangeText.bind(this)}/>
        No2 : <input type="txt2" name="txt2" onChange={this.onChangeText.bind(this)}/>
        <input type="button"onClick={this.dosum.bind(this)} value="sum"/>
        {this.state.ans}

        </>
    )
   }
}
export default Sumdemo