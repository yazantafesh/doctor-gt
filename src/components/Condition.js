import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import '../CSS/condition.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB94D',
      light: '#EF6655'
    },
    secondary: {
      main: '#36BC7F',
    },
    light: {
      main: '#EF6655',
    },
  }
});

const theme2 = createTheme({
  palette: {
    primary: {
      main: '#EF6655',
    },
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: 'center',
    width: '28%',
    height: 300,
    paddingTop: 12,
    border: 'solid 1px lightgrey',
    display: 'inline-block',
    marginLeft: '4%'
  },
  good: {
    color: '#36BC7F',
    fontWeight: 'bold',
  },
  satisfactory: {
    color: '#FFB94D',
    fontWeight: 'bold',
  },
  critical: {
    color: '#EF6655',
    fontWeight: 'bold',
  }
}));

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex" >
      <CircularProgress variant="determinate" size={80}{...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textPrimary" className='percentage' >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function StatusCard(props) {

  return (
    <Card className={props.cardClass}>
      <p className={props.titleClass}>{props.title}</p>
      <CircularProgressWithLabel value={props.value} totalCars={props.totalCars} color={props.color} className='donut' />
      <hr className='horizontalLine' />
      <CardContent>
        <Typography component="p" className='nums'>
          {Math.round((props.value / 100) * props.totalCars)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Vehicles
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Condition() {
  const classes = useStyles();
  const [totalCars, setTotalCars] = React.useState(90);
  const [good, setGood] = React.useState((48 / totalCars) * 100);
  const [satisfactory, setSatisfactory] = React.useState((27 / totalCars) * 100);
  const [critical, setCritical] = React.useState((15 / totalCars) * 100);

  return (
    <ThemeProvider theme={theme}>
      <div className='div'>
        <h3 className='heading'>Vehicles Condition</h3>
        <StatusCard totalCars={totalCars} title='Good' value={good} cardClass={classes.root} titleClass={classes.good} color='secondary' />
        <StatusCard totalCars={totalCars} title='Satisfactory' value={satisfactory} cardClass={classes.root} titleClass={classes.satisfactory} color='primary' />
        <ThemeProvider theme={theme2}>
          <StatusCard totalCars={totalCars} title='Critical' value={critical} cardClass={classes.root} titleClass={classes.critical} color='primary' />
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}
