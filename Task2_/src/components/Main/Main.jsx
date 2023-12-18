import React from 'react';
import style from './Main.module.scss'
import data from '../../data.json'
import Line from '../Line/Line'

const Main = () => {
  
    return (
<div className={style.table}>
            <div className={style.table__head}>
            <div className={style.table__number}>
            
            </div>
            <div className={style.table__english}>
            Слово на английском
            </div>
            <div className={style.table__transcription}>
            Транскрипция
            </div>
            <div className={style.table__russian}>
            Слово на русском
            </div>
            <div className={style.table__buttons}>
            
            </div>
            </div>
             
            {data.map(item => (
                <Line
                    key={item.id}
                    english={item.english}
                    transcription={item.transcription}
                    russian={item.russian}
                />
            ))}
        </div>


    );
};

export default Main;

