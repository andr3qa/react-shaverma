import { Button } from '@/components';
import s from './styles.module.scss';

export const Categories = () => {
  return (
    <div className={s.categories}>
      <Button variant="category_active">Все</Button>
      <Button variant="category">Мясные</Button>
      <Button variant="category">Вегетарианская</Button>
      <Button variant="category">Гриль</Button>
      <Button variant="category">Острые</Button>
    </div>
  );
};
