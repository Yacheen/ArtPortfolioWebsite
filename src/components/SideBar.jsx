import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    minHeight: "110%",
    backgroundColor: "#0b2e2d",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="some random text that is very random, maybe
          you could have your tos here,
          or something stating something before someone can connect with you,
          and maybe some more stuff below" />
        </ListItem>
        <ListItemLink href="mailto:youremail@hotmail.com">
          <ListItemText primary="youremail@hotmail.com" />
        </ListItemLink>
      </List>
    </div>
  );
}