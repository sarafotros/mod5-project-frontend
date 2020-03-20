import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomepageIcon from '@material-ui/icons/Home';
import NewRequestIcon from '@material-ui/icons/NoteAdd';

export default class DrawerMenu extends Component {
  render() {
    if (localStorage.role === 'user') {
      return (
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomepageIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NewRequestIcon />
            </ListItemIcon>
            <ListItemText primary={'New request'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NewRequestIcon />
            </ListItemIcon>
            <ListItemText primary={'My bookings'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NewRequestIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact us'} />
          </ListItem>
        </List>
      );
    }
    return (
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomepageIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NewRequestIcon />
          </ListItemIcon>
          <ListItemText primary={'All requests'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NewRequestIcon />
          </ListItemIcon>
          <ListItemText primary={'My contracts'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NewRequestIcon />
          </ListItemIcon>
          <ListItemText primary={'Contact us'} />
        </ListItem>
      </List>
    );
  }
}
