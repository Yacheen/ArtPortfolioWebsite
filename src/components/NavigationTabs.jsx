import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PaletteIcon from '@material-ui/icons/Palette';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    backgroundColor: "#0b2e2d",
    fontSize: "12px",
    
    
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Link className="nav-buttons" to="/" ><Tab className={classes.root} icon={<PaletteIcon  fontSize="large"/>} label="PORTFOLIO" /></Link>
        <Link className="nav-buttons" to="/General-Prices" ><Tab className={classes.root} icon={<LocalOfferIcon fontSize="large"/>} label="PRICING" /></Link>
        <Link className="nav-buttons" to="/Contact" ><Tab className={classes.root} icon={<ChatBubbleIcon fontSize="large"/>} label="CONTACT" /></Link>
        
      </Tabs>
    </Paper>
  );
}