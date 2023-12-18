import style from './Cards.module.scss'
import React from 'react';

const Cards = ({price,speed,color}) => {
 //вообще не уверена в правильности данного метода по отрисовке всех карточек в разных цветах, не понимаю, как использовать темизацию через модули css. В итоге добавила просто по два класса к каждому элементу. Первый-основной, второй для цвета. И увеличила в размерах голубой контейнер
    return (
        <div className={`${style.container} ${style[`container-${color}`]}`}> 
            <div className={`${style.container__head} ${style[`container-${color}__head`]}`}>Безлимитный {price}</div>
            <div className={`${style.container__price} ${style[`container-${color}__price`]}`}><span>руб</span> {price} /мес</div>
            <div className={`${style.container__speed} ${style[`container-${color}__speed`]}`}> до {speed} Мбит/сек</div>
            <div className={`${style.container__terms} ${style[`container-${color}__terms`]}`}>Объем включенного трафика не ограничен</div>
        </div>
    );
};

export default Cards;
//style.container__head
// style.container__price
// style.container__speed
// style.container__terms
// <div className={`${style.container__head} ${style[`container__head-${color}`]}`}>Безлимитный {price}</div>