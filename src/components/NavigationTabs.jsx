import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from './PhoneIcon';
import ShoppingCartIcon from './ShoppingCartIcon';


export default function NavigationTabs() {
    return (
        <Paper square>
        <Tabs
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<ShoppingCartIcon />} label="Pricing" />
          <Tab icon={<PhoneIcon />} label="Contact" />
        </Tabs>
      </Paper>
    )
}
