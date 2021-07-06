
import { 
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import Contact from './Contact';
import GeneralPrices from './GeneralPrices';
import Home from './Home';
import ThemeChanger from './ThemeChanger';
import React, { useState } from 'react';

export default function NavBar({}) {
    const [isToggled, setIsToggled] = useState(false);
    const setTheme = color => {
        localStorage.setItem('theme', color);
        document.documentElement.className = color;
    }
    const handleClick = () => {
        if(localStorage.getItem('theme') === 'blue-theme') {
            setTheme('green-theme');
        }else {
            setTheme('blue-theme');
        }
    }
    
    
    
    return (
        <Router>
            <nav className="nav-bar">
                <div className="nav-bar-content">
                    <div className="Home-button">
                        <h2><Link className="Home-link" to="/">Alanna</Link></h2>
                    </div>
                    <ul className="navigation-links">
                        <li><ThemeChanger onClick={handleClick()} rounded={true} isToggled={isToggled} onToggle={() => {
                                setIsToggled(!isToggled);
                                console.log(isToggled);
                            }}/>
                        </li>
                        <li><Link className="navigation-link" to="/General-Prices">Prices</Link></li>
                        <li><Link className="navigation-link" to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <Switch>
            <Route path="/" exact={true} component={Home}/>
                
            <Route path="/General-Prices" exact={true} component={GeneralPrices} />
        
            <Route path="/Contact" exact={true} component={Contact} />
            </Switch>
        </Router>

    )
}
