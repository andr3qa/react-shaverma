import { Button } from '@/components';
import s from './styles.module.scss';

export const Product = () => {
  return (
    <div className={s.product}>
      <img
        className={s.product__image}
        src="https://шавермабар.рф/wp-content/uploads/2020/11/%D0%B3%D1%80%D0%B8%D0%BB%D1%8C-%D1%82%D0%B5%D0%B9%D1%81%D1%82%D0%B8-scaled.jpg"
        alt="Шаверма"
      />
      <h4 className={s.product__title}>Шаверма</h4>
      <div className={s.product__selector}>
        <div className={s.product__types}>
          <Button variant="productSelect_active">В лаваше</Button>
          <Button variant="productSelect">На тарелке</Button>
        </div>
        <div className={s.product__types}>
          <Button variant="productSelect_active">L</Button>
          <Button variant="productSelect">XL</Button>
          <Button variant="productSelect">XXL</Button>
        </div>
      </div>
      <div className={s.product__bottom}>
        <div className={s.product__price}>от 395 ₽</div>
        <Button>
          <span className={s.button__txt}>Добавить</span>
          <span className={s.button__counts}>2</span>
        </Button>
      </div>
    </div>
  );
};
