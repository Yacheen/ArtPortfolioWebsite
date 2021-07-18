
import { 
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import GeneralPrices from './GeneralPrices';
import Home from './Home';
//import ThemeChanger from './ThemeChanger';
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
//navbar links
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PaletteIcon from '@material-ui/icons/Palette';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SideBar from './SideBar';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 500,
      background: "#0b2e2d",
      
      
    },
  });



export default function NavBar({}) {
    //old block of code for testing how to change to dark theme. do material
    //way of changing theme instead.
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

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    
    return (
    
        <Router>
            <nav className="nav-bar">
                <div className="nav-bar-content">
                    <div className="Home-button">
                        <h2><Link onClick={() => handleChange('', 0)}  className="Home-link" to="/">Alanna</Link></h2>
                    </div>
                    <ul className="navigation-links">
                        
                        {/* theme changing button that handles click and sets to t/f
                        <li><p>Theme</p>
                            <ThemeChanger onClick={handleClick()} rounded={true} isToggled={isToggled} onToggle={() => {
                                setIsToggled(!isToggled);
                                console.log(isToggled);
                            }}/>
                        </li>
                        */}
                        <Paper square className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        >
                            <Tab component={Link} to="/" icon={<PaletteIcon />} label="PORTFOLIO"/>
                            <Tab component={Link} to="/General-Prices" icon={<LocalOfferIcon />} label="PRICING" />
                            
                        </Tabs>
                        </Paper>
                    </ul>
                </div>
            </nav>


            
            <section className="website-body">
            <div className="side-bar">
                <SideBar />
            </div>

            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/General-Prices" exact={true} component={GeneralPrices}/>
 
            </Switch>
            </section>
            

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-copyright-text">
                        <p>Alanna &#169; All rights reserved</p>
                    </div>
                    
                </div>
            </footer>
        </Router>


    )
}
