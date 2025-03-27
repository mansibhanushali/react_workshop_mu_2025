import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Gallery from "./Gallery";
import EventDemo from "./EventDemo";
import Counter from "./Counter";
import Sumdemo from "./Sumdemo";


function App()
{
  return(<div>
    <h1> My React App</h1>
    <Router>

    <Link to='Home'> Home| </Link>
    <Link to="About"> About| </Link>
    <Link to="Contact"> Contact| </Link>
    <Link to="Gallery"> Gallery| </Link>
    <Link to="EventDemo"> EventDemo| </Link>
    <Link to="Counter"> Counter | </Link>
    <Link to="Sumdemo"> Sumdemo </Link>
    
        <Routes>
          <Route element={<Home/>} path="/home"/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Contact/>} path="/contact"/>
          <Route element={<Gallery/>} path="/gallery"/>
          <Route element={<EventDemo/>} path="/eventdemo"/>
          <Route element={<Counter/>} path="/counter"/>
          <Route element={<Sumdemo/>}path ="/Sumdemo"/>
          <Route element={<h1> 404 Page Not Found</h1>} path=" +"/>
      </Routes>
    </Router>
  </div>)
}
export default App