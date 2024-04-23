import styles from './Button.module.scss';

interface PropsButton {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'accent';
  size: 'sm' | 'md' | 'lg';

  onClick?: () => void;
}
const Button = (props: PropsButton): JSX.Element => {
  const buttonClass = `${styles.button} ${styles[props.variant]} ${styles[props.size]}`;

  return (
    <div>
      <button className={buttonClass}>{props.children}</button>
    </div>
  );
};

export default Button;
