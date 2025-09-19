import { Categories, EmptyPage, Product, Skeleton, Sort } from '@/components';
import s from './styles.module.scss';
import { useEffect, useRef } from 'react';
import { fetchShaverma } from '@/store/slices/shavermaSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import qs from 'qs';
import { useNavigate } from 'react-router';
import { sortOptions } from '@/constants/sortOptions';
import { setCategories } from '@/store/slices/categoriesSlice';
import { setSort } from '@/store/slices/sortSlice';
import { useDebouncedCallback } from 'use-debounce';

export const Home: React.FC = () => {
  const { items, loading, error } = useAppSelector((state) => state.shaverma);
  const activeCategory = useAppSelector((state) => state.categories.value);
  const { sortProperty, order } = useAppSelector((state) => state.sort);
  const searchValue = useAppSelector((state) => state.search.value);
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();

  const queryString = qs.stringify(
    {
      sortBy: sortProperty,
      order,
      category: activeCategory == 0 ? undefined : activeCategory,
      title: searchValue == '' ? undefined : searchValue,
    },
    {
      addQueryPrefix: true,
    }
  );

  // Синхронизация состояния Redux с URL при монтировании
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortObj =
        sortOptions.find((obj) => obj.sortProperty === params.sortBy) ||
        sortOptions[0];
      dispatch(setCategories(Number(params.category) || 0));
      dispatch(setSort(sortObj));
    }
  }, [dispatch]);

  // Загрузка данных с API
  const fetchPizzas = useDebouncedCallback(() => {
    dispatch(fetchShaverma(queryString));
  }, 250);

  useEffect(() => {
    fetchPizzas();
    window.scrollTo(0, 0);
    return () => fetchPizzas.cancel();
  }, [activeCategory, sortProperty, order, searchValue, fetchPizzas]);

  // Обновление URL при изменении параметров
  const updateUrl = useDebouncedCallback(() => {
    if (isMounted.current) {
      navigate(queryString);
    }

    isMounted.current = true;
  }, 250);

  useEffect(() => {
    updateUrl();
    return () => updateUrl.cancel();
  }, [activeCategory, sortProperty, order, searchValue, navigate, updateUrl]);

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
        {loading
          ? [...Array(12)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Product key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
