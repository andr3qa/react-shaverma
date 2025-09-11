import clsx from 'clsx';
import s from './styles.module.scss';
import { type ReactNode } from 'react';

type BtnProps = {
  children: ReactNode;
  variant?:
    | 'back'
    | 'circle'
    | 'delete'
    | 'cart'
    | 'category'
    | 'category_active'
    | 'productSelect'
    | 'productSelect_active'
    | undefined;
};

export const Button: React.FC<BtnProps> = ({ children, variant }) => {
  return (
    <button
      className={clsx(s.btn, {
        [s.btn_back]: variant === 'back',
        [s.btn_circle]: variant === 'circle',
        [s.btn_circle + ' ' + s.btn_circle_delete]: variant === 'delete',
        [s.btn_cart]: variant === 'cart',
        [s.btn_category]: variant === 'category',
        [s.btn_category + ' ' + s.btn_category_active]:
          variant === 'category_active',
        [s.btn_productSelect]: variant === 'productSelect',
        [s.btn_productSelect + ' ' + s.btn_productSelect_active]:
          variant === 'productSelect_active',
      })}
    >
      {children}
    </button>
  );
};
