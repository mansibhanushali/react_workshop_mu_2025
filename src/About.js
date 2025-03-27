import './Style.css'

function About(){
    var a= 10
    var b= 20
    var c= a+b
    var msg=""
    if(c==30)
        {msg = "C value is " + c}
    else{
        msg = "C value is not 30"
    }
    var mycolor = {
        backgroundColor:'blue',
        color:'white'
    }
    return (<>
            
            <h1>About component</h1>
            A value is {a} <br/>
            B value is {b} <br/>
            sum is {a+b} <br/>
            {msg}
            <p style={{ backgroundColor: 'red', color: 'white' }}>I am Inline Css</p>
            <p style={mycolor}>I am Internal Css</p>
            <p style={mycolor}>I am Internal Css</p>
            <p className="myclass">I am External Css</p>
    </>)
}
export default About