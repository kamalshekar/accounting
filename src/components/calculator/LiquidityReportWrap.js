import React, { Component } from "react";
import NavbarMain from "../navbar/NavbarMain";
import LiquidityReport from "./LiquidityReport";
export default class LiquidityReportWrap extends Component {
                 render() {
                   return (
                     <div>
                       <NavbarMain children={<LiquidityReport />} />
                     </div>
                   );
                 }
               }
