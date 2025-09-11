import { Button } from '@/components';
import s from './styles.module.scss';

export const CartProduct = () => {
  return (
    <div className={s.cartProduct}>
      <img
        className={s.cartProduct__img}
        src="https://шавермабар.рф/wp-content/uploads/2020/11/%D0%B3%D1%80%D0%B8%D0%BB%D1%8C-%D1%82%D0%B5%D0%B9%D1%81%D1%82%D0%B8-scaled.jpg"
        alt="Шаверма"
      />
      <div className={s.cartProduct__info}>
        <h3>Шаверма</h3>
        <p>В лаваше, XXL</p>
      </div>
      <div className={s.cartProduct__count}>
        <Button variant="circle">-</Button>
        <b>2</b>
        <Button variant="circle">+</Button>
      </div>
      <div className={s.cartProduct__price}>
        <b>770 ₽</b>
      </div>
      <Button variant="delete">
        <span>+</span>
      </Button>
    </div>
  );
};
