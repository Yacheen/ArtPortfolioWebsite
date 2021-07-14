
import { 
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import Contact from './Contact';
import GeneralPrices from './GeneralPrices';
import Home from './Home';
//import ThemeChanger from './ThemeChanger';
import React, { useState } from 'react';
import NavigationTabs from './NavigationTabs'



export default function NavBar({}) {
    /*
    const [isToggled, setIsToggled] = useState(false);
    const setTheme = color => {
        localStorage.setItem('theme', color);
        document.documentElement.className = `${color} !important`
    }
    const handleClick = () => {
        if(isToggled) {
            setTheme('green-theme');
        }else {
            setTheme('blue-theme');
        }
    }
    */

    
    
    return (
    
        <Router>
            <nav className="nav-bar">
                <div className="nav-bar-content">
                    <div className="Home-button">
                        <h2><Link className="Home-link" to="/">Alanna</Link></h2>
                    </div>
                    <ul className="navigation-links">
                        
                        {/*
                        <li><p>Theme</p>
                            <ThemeChanger onClick={handleClick()} rounded={true} isToggled={isToggled} onToggle={() => {
                                setIsToggled(!isToggled);
                                console.log(isToggled);
                            }}/>
                        </li>
                        */}
                        <NavigationTabs />
                    </ul>
                </div>
            </nav>

            

            <Switch>
            <Route path="/" exact={true} component={Home}/>
                
            <Route path="/General-Prices" exact={true} component={GeneralPrices} />
        
            <Route path="/Contact" exact={true} component={Contact} />
            </Switch>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-copyright-text">
                        <p>Alanna &#169; All rights reserved</p>
                    </div>
                    <div className="footer-links">
                        <Link className="footer-link" to="/General-Prices"><p>Prices</p></Link>
                        <Link className="footer-link" to="/Contact"><p>Contact</p></Link>
                    </div>
                </div>
            </footer>
        </Router>


    )
}
