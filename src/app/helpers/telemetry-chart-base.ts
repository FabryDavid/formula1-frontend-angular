import {IChartOptions} from '../interfaces/ichart-options';
import {Timing} from '../classes/timing/timing';

const telemetryChartBase: IChartOptions = {
  chart: {
    type: 'line',
    height: 600,
    animations: {
      enabled: true,
      easing: 'easeout',
      speed: 300,
      animateGradually: {
        enabled: false,
      },
      dynamicAnimation: {
        enabled: false,
      },
    },
  },
  xaxis: {
    categories: [],
    title: {
      text: 'Laps',
      style: {
        fontSize: '12px',
        fontFamily: 'Poppins',
        fontWeight: 600,
      },
    },
    labels: {
      show: true,
      showDuplicates: false,
      style: {
        colors: [],
        fontSize: '12px',
        fontFamily: 'Poppins',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Time',
      style: {
        fontSize: '12px',
        fontFamily: 'Poppins',
        fontWeight: 600,
      },
    },
    labels: {
      show: true,
      style: {
        colors: [],
        fontSize: '12px',
        fontFamily: 'Poppins',
      },
      formatter: function (val) {
        return Timing.msToTime(val).toStringFormatted(true);
      },
    },
  },
  series: [],
  stroke: {
    curve: 'smooth',
  },
  colors: [],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    showForSingleSeries: false,
    position: 'left',
    fontFamily: 'Poppins',
  },
  plotOptions: {},
  tooltip: {
    enabled: true,
    x: {
      show: true,
      formatter: function (val) {
        return `Lap ${val}`;
      },
    },
    y: {
      formatter: function (val) {
        return Timing.msToTime(val).toStringFormatted(true);
      },
    },
  },
  responsive: [
    {
      breakpoint: 960,
      options: {
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
};

export default telemetryChartBase;
