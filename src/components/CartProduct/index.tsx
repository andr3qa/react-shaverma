import { Button } from '@/components';
import s from './styles.module.scss';
import {
  decrementCount,
  deleteItem,
  incrementCount,
  type CartItem,
  type CartItemCount,
} from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/hooks';

export const CartProduct: React.FC<CartItem> = ({
  id,
  imageUrl,
  title,
  type,
  size,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = (item: CartItemCount) => {
    if (confirm('Вы действительно хотите удалить позицию?')) {
      dispatch(deleteItem(item));
    }
  };

  return (
    <div className={s.cartProduct}>
      <div className={s.cartProduct__desc}>
        <img className={s.cartProduct__img} src={imageUrl} alt="Шаверма" />
        <div className={s.cartProduct__info}>
          <h3>{title}</h3>
          <p>{type + ', ' + size}</p>
        </div>
      </div>
      <div className={s.cartProduct__calc}>
        <div className={s.cartProduct__count}>
          <Button
            disabled={count === 1}
            onClick={() => dispatch(decrementCount({ id, type, size }))}
            variant="circle"
            aria-label="Уменьшить количество"
          >
            -
          </Button>
          <b>{count}</b>
          <Button
            onClick={() => dispatch(incrementCount({ id, type, size }))}
            variant="circle"
            aria-label="Увеличить количество"
          >
            +
          </Button>
        </div>
        <div className={s.cartProduct__price}>
          <b>{price * count} ₽</b>
        </div>
        <Button
          onClick={() => handleDeleteItem({ id, type, size })}
          variant="delete"
        >
          <span>×</span>
        </Button>
      </div>
    </div>
  );
};
