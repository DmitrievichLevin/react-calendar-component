import React, { useEffect, useState, useRef, defaultProps } from "react";
import * as d3 from "d3";
import Calendar from "./utils/Calendar";
import styles from './styles.module.css'

ReactCalendar.defaultProps = {

  width : '60px',
  color : "burlywood",
  currentDayColor : "#57A28D",
  monthSize : "3em",
  monthColor: "white",
  daySize : "1em"

}

export default function ReactCalendar(props) {
  const calendar = useRef(null);
  const container = useRef(null);


                  
  

  var cal = new Calendar();

  useEffect(()=>{
    
    
    const calHeadnShoulders = d3
      .select(calendar.current)
      .append("g");
      

    const body = calHeadnShoulders.append("tbody");
    const header = calHeadnShoulders.append("thead")


    header
      .append("tr")
      .append("td")
      .style("background-color", props.color)
      .style("border-radius", "1em 1em 0 0")
      .attr("colspan", 7)
      .style("text-align", "left")
      .style("padding-left", (parseInt(props.width)/6)+ "px")
      .append("h1")
      .style("font-weight", "500")
      .style("font-size", props.monthSize)
      .style("color", props.monthColor)
      .text(cal.Calendar.month_name);

    header
      .append("tr")
      .style("background-color", props.color)
      .selectAll("td")
      .data(cal.Calendar.day_names)
      .enter()
      .append("td")
      .attr("width", props.width)
      .style("text-align", "left")
      .style("font-weight", "100")
      .style("font-size", props.daySize)
      .text(function (d) {
        return d;
      });

      console.log(cal.Calendar.weeks);
      let count = 0;
    cal.Calendar.weeks.forEach(function (week) {
      body
        .append("tr")
        .selectAll("td")
        .data(week)
        .enter()
        .append("td")
        .attr("height", props.width)
        .attr("width", props.width)
        .attr("id", function (d, i) {
          return "dataCell" + i;
        })
        .style("background-color", function (d) {
          return d === new Date().getDate() ? props.currentDayColor : d > 0 ? "#FFF" : "#FFF2F2";
        })
        .attr("class", function (d) {
          return d > 0 ? "" : "empty";
        })
        .text(function (d) {
           return d > 0 ? d : "";
         })
         .style("font-size", props.daySize)
         .style("border-radius", function(d, i){
           count++;
           let length = cal.Calendar.weeks.length - 1
           let lastRowLeft = cal.Calendar.weeks[length][0]
           let lastRowRight = cal.Calendar.weeks[length][6]
           return lastRowLeft === d ? "0 0 0 1em" : i === 6  && (count % (length+1)) === 0 ? "0 0 1em 0" : ""
         });
        
    });

  

    },[]);

    

  

  return (

      <div id="calendarcontainer" className="calCont" ref={container}>
      
            <table ref={calendar} className={styles.calendarbody}></table>
          
    </div>
    
  );
}

  
