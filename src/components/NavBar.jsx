import React from 'react'
import { 
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import GeneralPrices from './GeneralPrices';
import Portfolio from './Portfolio';
import Home from './Home';


export default function NavBar() {
    return (
        <Router>
            <nav className="nav-bar">
                <div className="nav-bar-content">
                    <div className="Home-button">
                        <h2><Link className="Home-link" to="/">Alanna</Link></h2>
                    </div>
                    <ul className="navigation-links">
                        <li><Link className="navigation-link" to="/Portfolio">Portfolio</Link></li>
                        <li><Link className="navigation-link" to="/General-Prices">Prices</Link></li>
                        <li><Link className="navigation-link" to="/About">About</Link></li>
                        <li><Link className="navigation-link" to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <Switch>
            <Route path="/" exact={true} component={Home}/>

            <Route path="/Portfolio" exact={true} component={Portfolio} />
                
            <Route path="/General-Prices" exact={true} component={GeneralPrices} />
                
            <Route path="/About" exact={true} component={About} />
        
            <Route path="/Contact" exact={true} component={Contact} />
            </Switch>
        </Router>

    )
}
