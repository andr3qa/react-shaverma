import s from './styles.module.scss';

export const Button = ({ children }) => {
  return <button className={s.button}>{children}</button>;
};
