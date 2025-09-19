import { useAppDispatch } from '@/hooks';
import s from './styles.module.scss';
import { setSearch } from '@/store/slices/searchSlice';
import { useRef, useState } from 'react';

export const SearchInput: React.FC = () => {
  const [localValue, setLocalValue] = useState('');
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const handleClearInput = () => {
    dispatch(setSearch(''));
    setLocalValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={s.searchInput}>
      <input
        ref={inputRef}
        onChange={(e) => handleInput(e)}
        className={s.searchInput__input}
        placeholder="Поиск..."
        name="search"
        type="text"
        value={localValue}
      />
      {localValue && (
        <button
          onClick={handleClearInput}
          className={s.searchInput__clearBtn}
          aria-label="Очистить поле"
        >
          ×
        </button>
      )}
    </div>
  );
};
