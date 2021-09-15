import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    backgroundColor: theme.palette.background.paper,
    border: 'solid 1px lightgrey'
  },
  button: {
    '& > *': {
      marginTop: 18,
      marginLeft: '15%',
    },
  },
  heading: {
    width: '50%',
    float: 'left',
    marginLeft: 10,
    color: '#555774'
  },
  active: {
    backgroundColor: '#1ACB6C',
    width: 23,
    height: 22,
    borderRadius: 11,
    textAlign: 'center',
    color: 'white'
  },
  inactive: {
    backgroundColor: '#0274D9',
    width: 23,
    height: 22,
    borderRadius: 11,
    textAlign: 'center',
    color: 'white'
  },
  inshop: {
    backgroundColor: '#E69121',
    width: 23,
    height: 22,
    borderRadius: 11,
    textAlign: 'center',
    color: 'white'
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Status() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <h3 className={classes.heading}>Vehicle Status</h3>
        <div className={classes.button}>
          <Button color="primary" size='small'>Details {'>'}</Button>
        </div>
        <ListItem button>
          <ListItemText primary="Active" />
          <ListItemIcon>
            <span className={classes.active}>
              {3}
            </span>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Inactive" />
          <ListItemIcon>
            <span className={classes.inactive}>
              {2}
            </span>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="In Shop" />
          <ListItemIcon>
            <span className={classes.inshop}>
              {1}
            </span>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}
