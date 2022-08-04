import {IChartOptions} from "../interfaces/ichart-options";
import {Timing} from "../classes/timing/timing";

const resultsChartBase: IChartOptions = {
  series: [],
  chart: {
    height: 600,
    type: "bar"
  },
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,],
    labels: {
      formatter: function (val) {
        return `+ ${Timing.msToTime(parseInt(val)).toStringFormatted()}`;
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
      distributed: true,
      barHeight: '70%',
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: ["black"],
    width: 1,
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return `+ ${Timing.msToTime(parseInt(val.toString())).toStringFormatted(true)}`;
    },
    textAnchor: "middle",
    style: {
      fontFamily: "Poppins",
    },
  },
  tooltip: {},
  colors: []
};

export default resultsChartBase
