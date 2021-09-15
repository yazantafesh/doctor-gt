import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button onClick={() => { props.changeActive('status') }}>Vehicle Status</Button>
        <Button onClick={() => { props.changeActive('condition') }}>Vehicles Condition</Button>
        <Button onClick={() => { props.changeActive('cost') }}>Fuel Cost</Button>
      </ButtonGroup>
    </div>
  );
}