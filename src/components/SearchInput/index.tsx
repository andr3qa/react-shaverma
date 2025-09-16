import s from './styles.module.scss';

export const SearchInput: React.FC = () => {
  return (
    <div className={s.searchInput}>
      <input
        className={s.searchInput__input}
        placeholder="Поиск..."
        name="search"
        type="text"
      />
      <button className={s.searchInput__clearBtn} aria-label="Очистить поле">
        +
      </button>
    </div>
  );
};
