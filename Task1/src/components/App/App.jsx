
import style from './App.module.scss'
import React from 'react';
import Cards from '../Cards/Cards';

const App = (index) => {
  return (
    <div className={style.main}>
      <Cards 
      key={index + 1} //тоже не уверена в правильности таких ключей
      price={300}
      speed={10}
      color="green"/>
      <Cards 
      key={index + 1}
      price={450}
      speed={50}
      color="pink"/>
      <Cards 
      key={index + 1}
      price={550}
      speed={100}
      color="blue"/>
      <Cards 
      key={index + 1}
      price={1000}
      speed={200}
      color="yellow"/>
    </div>
  );
};

export default App;