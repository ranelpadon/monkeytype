//this file should be concatenated at the top of the legacy js files

import Chart from "chart.js";
import chartTrendline from "chartjs-plugin-trendline";
import chartAnnotation from "chartjs-plugin-annotation";

Chart.plugins.register(chartTrendline);
Chart.plugins.register(chartAnnotation);

import {
  db_getSnapshot,
  db_setSnapshot,
  db_getUserSnapshot,
  db_getUserResults,
  db_getUserHighestWpm,
  db_getLocalPB,
  db_saveLocalPB,
} from "./db";
