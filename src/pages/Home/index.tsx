import { Categories, EmptyPage, Product, Sort } from '@/components';
import s from './styles.module.scss';
import { useEffect } from 'react';
import { fetchShaverma } from '@/store/slices/shavermaSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

export const Home: React.FC = () => {
  const { items, loading, error } = useAppSelector((state) => state.shaverma);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShaverma());
  }, [dispatch]);

  if (error) {
    return <EmptyPage />;
  }

  return (
    <div className={s.container}>
      <div className={s.content__top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={s.content__title}>Все шавермы</h2>
      <div className={s.content__items}>
        {loading ? (
          <h1>Идет загрузка...</h1>
        ) : (
          items.map((obj) => <Product key={obj.id} {...obj} />)
        )}
      </div>
    </div>
  );
};
