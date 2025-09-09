import s from './styles.module.scss';

export const Categories = () => {
  return (
    <div className={s.categories}>
      <ul>
        <li className={s.active}>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
      </ul>
    </div>
  );
};
