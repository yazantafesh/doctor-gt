import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import '../CSS/fuelCost.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#555774'
    },
  },
});

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

const rand = (param) => Math.round(Math.random() * param);

const monthlyData = (m) => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Fuel Consumption',
      data: [rand(m), rand(m), rand(m), rand(m), rand(m), rand(m), rand(m), rand(m), rand(m), rand(m), rand(m), rand(m)],
      borderColor: '#4EAD9C',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      pointRadius: 0,

    },
  ],
});

const weeklyData = (w) => ({
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Fuel Consumption',
      data: [rand(w), rand(w), rand(w), rand(w), rand(w), rand(w), rand(w)],
      borderColor: '#4EAD9C',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      pointRadius: 0,

    },
  ],
});

const dailyData = (d) => ({
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
  datasets: [
    {
      label: 'Fuel Consumption',
      data: [rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d), rand(d)],
      borderColor: '#4EAD9C',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      pointRadius: 0,

    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const FuelCost = () => {

  const classes = useStyles();
  const [data, setData] = useState(monthlyData(100000));

  return (
    <ThemeProvider theme={theme}>
      <div className='fuelDiv'>
        <div className='header'>
          <h4 className='fuelHeadingz'>Fuel Cost</h4>
          <hr className='fuelHr' />
          <div className='links'>
            <p className='fuelPz'>Average Fuel Consumption</p>
            <h3 className='fuelHeadingz'>28.6L/100km</h3>
          </div>
          <div className='links'>
            <p className='fuelPz'>Fuel Cost</p>
            <h3 className='fuelHeadingz'>$70.000</h3>
          </div>
        </div>
        <Line data={data} options={options} />
        <div className={classes.root}>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={() => { setData(monthlyData(100000)) }}>Monthly</Button>
            <Button onClick={() => { setData(weeklyData(10000)) }}>Weekly</Button>
            <Button onClick={() => { setData(dailyData(1000)) }}>Daily</Button>
          </ButtonGroup>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FuelCost;
