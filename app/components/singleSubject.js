"use client";
import { useEffect, useState } from "react";
import styles from './singleSubject.module.css'

export default function SingleSubject({info}) {
    const [infoRecord, setInfoRecord] = useState('');
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleDivClick = () => {
        setInfoRecord(info);
        setPopupOpen(!isPopupOpen);
    };

    const handleCloseClick = () => {
        setPopupOpen(false);
    };

    return (
        <>
            <div className={styles.mainDiv} onClick={handleDivClick}>
                <div className={styles.info}>
                    <p className={styles.subject}>{info.name}</p>
                    <p className={styles.duration}>{info.info.duration}</p>
                    <div className={styles.imgBox}>
                        <img src={info.info.teacherImg} alt="Teacher" />
                        <p>{info.info.teacher}</p>
                    </div>
                    <div className={styles.courseDivs}>
                        {info.info.course.map((course) => (
                            <p key={course} className={styles.course}>
                                <div
                                    className={course === 'A1-1' ? styles.whiteGreen :
                                                course === 'A1-2' ? styles.green :
                                                course === 'A2-1' ? styles.darkGreen :
                                                course === 'A2-2' ? styles.whiteOrange :
                                                course === 'B1-1' ? styles.orange :
                                                course === 'B1-2' ? styles.darkOrange :
                                                course === 'B2' ? styles.red : ''
                                            }
                                ></div>{course}
                            </p>
                        ))}
                    </div>
                    <p className={styles.level}>
                        Ниво : <span className={info.info.level === "Напреднал" ? styles.advanced : styles.normal}>'{info.info.level}'</span>
                    </p>
                </div>

                {isPopupOpen && (
                    <div>
                        <div className={styles.overlay}></div>
                        <div className={styles.fullScreenPopup}>
                          <h2>Повече информация за урока</h2>
                            {/* Display data for the selected record */}
                            <p className={styles.nameP}><span>Урок:</span> {infoRecord.name}</p>
                            <p className={styles.durationP}><span>Продължителност:</span> {infoRecord.info.duration}</p>
                            <p> <span>За учителя: </span>{info.info.teacher} -  "{info.teacherInfo}"</p>
                            <p><span>Интро : </span> {infoRecord.moreInfo}</p>
                            <button onClick={handleCloseClick}>Затвори</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
