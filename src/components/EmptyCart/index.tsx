import { LinkBack } from '@/components';
import s from './styles.module.scss';
import emptyCartImg from './../../assets/img/emptyCart.png';

export const EmptyCart = () => {
  return (
    <div className={s.emptyCart}>
      <img src={emptyCartImg} alt="" />
      <h2>
        Корзина пустая
        <span className={s.emptyCart__icon}>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <LinkBack />
    </div>
  );
};
