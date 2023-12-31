import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="MrSomnathRoy"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}



// import React from 'react';
// import ReactDOM from 'react-dom';
// import CalendarHeatmap from 'react-calendar-heatmap';
// import ReactTooltip from 'react-tooltip';
// import 'react-calendar-heatmap/dist/styles.css';

// const today = new Date();

// function Github() {
//   const randomValues = getRange(200).map(index => {
//     return {
//       date: shiftDate(today, -index),
//       count: getRandomInt(1, 3),
//     };
//   });
//   return (
//     <div>
//       <h1>react-calendar-heatmap demos</h1>
//       <p>Random values with onClick and react-tooltip</p>
//       <CalendarHeatmap
//         startDate={shiftDate(today, -150)}
//         endDate={today}
//         values={randomValues}
//         classForValue={value => {
//           if (!value) {
//             return 'color-empty';
//           }
//           return `color-github-${value.count}`;
//         }}
//         tooltipDataAttrs={value => {
//           return {
//             'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
//               value.count
//             }`,
//           };
//         }}
//         showWeekdayLabels={true}
//         onClick={value => alert(`Clicked on value with count: ${value.count}`)}
//       />
//       <ReactTooltip />
//     </div>
//   );
// }

// function shiftDate(date, numDays) {
//   const newDate = new Date(date);
//   newDate.setDate(newDate.getDate() + numDays);
//   return newDate;
// }

// function getRange(count) {
//   return Array.from({ length: count }, (_, i) => i);
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export default Github;