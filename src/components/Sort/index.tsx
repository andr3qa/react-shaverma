import { Button } from '@/components';
import s from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import { sortOptions } from '@/constants/sortOptions';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setSort, type SortState } from '@/store/slices/sortSlice';

export const Sort: React.FC = () => {
  const sortList = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const name = useAppSelector((state) => state.sort.name);
  const dispatch = useAppDispatch();

  const sortHandler = (obj: SortState) => {
    dispatch(setSort(obj));
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && sortList.current) {
      sortList.current.focus();
    }

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        sortList.current &&
        !event.composedPath().includes(sortList.current)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const renderSortList = () => (
    <div className={s.sort__sortList}>
      {sortOptions.map((option, i) => (
        <Button
          onClick={() => sortHandler(option)}
          key={i}
          variant={option.name === name ? 'sortSelect_active' : 'sortSelect'}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );

  return (
    <div ref={sortList} className={s.sort}>
      <div className={s.sort__label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="currentColor"
          />
        </svg>
        <b>Сортировка по:</b>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть список сортировки"
          aria-expanded={isOpen}
        >
          {name}
        </button>
      </div>
      {isOpen && renderSortList()}
    </div>
  );
};
