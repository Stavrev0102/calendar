"use client";
import { useEffect, useState } from "react";
import SingleSubject from "./components/singleSubject";
import styles from "./index.module.css";

export default function Calendar({ data }) {
  const uniqueDays = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя'];
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newData = data.filter((element) => element.name !== '');
    setFilteredData(newData);
    
  }, [data]);

  const groupedData = filteredData.reduce((acc, subject) => {
    const time = subject.time;
    acc[time] = acc[time] || {};
    acc[time][subject.day] = subject;
    return acc;
  }, {});

  //sort times in correct order
    const sortedTime = Object.keys(groupedData).sort((a,b) => a.localeCompare(b));

  return (
    <div className={styles.mainDiv}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th>Time</th>
            {uniqueDays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {sortedTime.map((time) => (
            <tr key={time} className={styles.tre}>
              <td>{time}</td>
              {uniqueDays.map((day) => (
                <td key={day} className={`${styles.test} ${groupedData[time][day] ? '' : styles.emptyCell}`}>
                  {groupedData[time][day] && (
                    <SingleSubject info={groupedData[time][day]} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
