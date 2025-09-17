import clsx from 'clsx';
import s from './styles.module.scss';
import { type ReactNode } from 'react';

type BtnProps = {
  children: ReactNode;
  variant?:
    | 'circle'
    | 'delete'
    | 'cart'
    | 'category'
    | 'category_active'
    | 'productSelect'
    | 'productSelect_active'
    | 'sortSelect'
    | 'sortSelect_active'
    | undefined;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<BtnProps> = ({
  children,
  variant,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(s.btn, {
        [s.btn_circle]: variant === 'circle',
        [s.btn_circle + ' ' + s.btn_circle_delete]: variant === 'delete',
        [s.btn_cart]: variant === 'cart',
        [s.btn_category]: variant === 'category',
        [s.btn_category + ' ' + s.btn_category_active]:
          variant === 'category_active',
        [s.btn_productSelect]: variant === 'productSelect',
        [s.btn_productSelect + ' ' + s.btn_productSelect_active]:
          variant === 'productSelect_active',
        [s.btn_sortSelect]: variant === 'sortSelect',
        [s.btn_sortSelect + ' ' + s.btn_sortSelect_active]:
          variant === 'sortSelect_active',
      })}
    >
      {children}
    </button>
  );
};
