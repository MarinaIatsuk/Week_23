import React, { useState } from 'react';
import style from './Line.module.scss';

const Line = ({ id, english, transcription, russian }) => {
  const [isEditing, setIsEditing] = useState(false); //это взято из просторов интернета, не до конца понимаю работу хука, если есть возможность сделать без него, хочу знать как
  //Прим для меня: isEditing - это переменная, которая содержит текущее значение состояния,  setIsEditing - это функция, которая позволяет изменять это состояние. useState(false) - это вызов хука useState с начальным значением false. Т.е. изначально isEditing установлено в false, чтобы строчки были не в состоянии редактирования


  //Обработчик для нажания на кнопку редактирования. Переводит состояние редактирования в true
  const editLine = () => {
    setIsEditing(true);
  };

  //Обработчик для нажания на кнопку отмены редактирования.  Возвоащает состояние редактирования в false
  const cancelEdit = () => {
    setIsEditing(false);
  };

  //Слушатель на кнопку сохранения. Прописать потом логику 
  const saveEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className={style.table__line}>
      <div className={style.table__number}></div>
      {isEditing ? ( //если поле находится в режиме редактирования(пользователь нажал на кнопку и  setIsEditing перешло в true), то отрисовываем инпуты вместо слов
        <>
          <input className={style.table__english} value={english} />
          <input className={style.table__transcription} value={transcription} />
          <input className={style.table__russian} value={russian} />
          <div className={style.table__buttons}>
            <button onClick={saveEdit}>Сохранить</button>
            <button onClick={cancelEdit}>Отменить</button>
          </div>
        </> //Хотела вынести инпуты в отдельную функцию, но тогда не видно слушатели saveEdit и cancelEdit, наверное, их тоже тогда в эту функцию выносить. Пока оставила так
      ) : (
        <>
          <div className={style.table__english}>{english}</div>
          <div className={style.table__transcription}>{transcription}</div>
          <div className={style.table__russian}>{russian}</div>
          <div className={style.table__buttons}>
            <button onClick={editLine}>Редактировать</button>
            <button>Удалить</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Line;