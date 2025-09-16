import { Button } from '@/components';
import s from './styles.module.scss';
import { categoriesOptions } from '../../constants/categoriesOptions';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCategories } from '@/store/slices/categoriesSlice';

export const Categories: React.FC = () => {
  const activeCategory = useAppSelector((state) => state.categories.value);
  const dispatch = useAppDispatch();

  return (
    <div className={s.categories}>
      {categoriesOptions.map((option, i) => (
        <Button
          key={i}
          variant={i === activeCategory ? 'category_active' : 'category'}
          onClick={() => dispatch(setCategories(i))}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
