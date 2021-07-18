/*import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Contact from './Contact';
import GeneralPrices from './GeneralPrices';
import Home from './Home';

import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    background: "#0b2e2d"
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Router>
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        
        
        <Tab component={Link} to="/" icon={<PhoneIcon />} label="RECENTS"/>
        <Tab component={Link} to="/General-Prices" icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab component={Link} to="/Contact" icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    </Paper>

    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/General-Prices" exact={true} component={GeneralPrices}/>
      <Route path="/Contact" exact={true} component={Contact}/>
      
    </Switch>
    </Router>
    
  );
}
*/