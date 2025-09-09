import s from './styles.module.scss';

export const Button = () => {
  return (
    <button className={s.button}>
      <span className={s.button__txt}>Добавить</span>
      <span className={s.button__counts}>2</span>
    </button>
  );
};
