import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import './common.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link,Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function Launcher() {
    const logo ="http://localhost:3000/logo.jpg";
    return ( 
    <div className='container'>
        <img src={logo} alt ="logo" className="logo" />
        <hr/>
        <Link to="/home">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/db">Dashboard</Link>{" | "}
        <hr/>
        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/home" component={Home}/>
            <Route exact path ="/about" component={About}/>
            <Route exact path ="/db" component={Dashboard}/>
            <Route path ="**" component={NotFound}/>
        </Switch>
    </div> );
}

export default Launcher;