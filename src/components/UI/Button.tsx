import styles from './Button.module.scss';

interface PropsButton {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'accent';
  size: 'xs' | 'sm' | 'md' | 'lg';
  error?: boolean;
  success?: boolean;
  onClick?: () => void;
  className?: string;
}
const Button = (props: PropsButton): JSX.Element => {
  let buttonClass = `${styles.button} ${styles[props.variant]} ${styles[props.size]}`;

  if (props.error) {
    buttonClass += ` ${styles.error}`;
  }

  if (props.success) {
    buttonClass += ` ${styles.success}`;
  }

  if (props.className) {
    buttonClass += ` ${props.className}`;
  }

  return (
    <div>
      <button className={buttonClass} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
