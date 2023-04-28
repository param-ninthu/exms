import React from "react";

import MainScreen from "../screens/mainScreen";
import ReportScreen from "../screens/reportScreen";

export default [
  { path: "/user/", component: MainScreen },
  { path: "/user/report", component: ReportScreen },
];
