import { Button } from '@/components';
import s from './styles.module.scss';

export const Product = () => {
  return (
    <div className={s.product}>
      <img
        className={s.product__image}
        src="https://шавермабар.рф/wp-content/uploads/2020/11/%D0%B3%D1%80%D0%B8%D0%BB%D1%8C-%D1%82%D0%B5%D0%B9%D1%81%D1%82%D0%B8-scaled.jpg"
        alt="Pizza"
      />
      <h4 className={s.product__title}>Шаверма</h4>
      <div className={s.product__selector}>
        <ul>
          <li className={s.active}>В лаваше</li>
          <li>На тарелке</li>
        </ul>
        <ul>
          <li className={s.active}>L</li>
          <li>XL</li>
          <li>XXL</li>
        </ul>
      </div>
      <div className={s.product__bottom}>
        <div className={s.product__price}>от 395 ₽</div>
        <Button />
      </div>
    </div>
  );
};
