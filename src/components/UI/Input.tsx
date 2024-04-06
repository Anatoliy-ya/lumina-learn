import styles from './Input.module.scss';

interface PropsInput {
  children?: React.ReactNode;
  variant: 'primary' | 'secondary' | 'accent';
  size: 'ssm' | 'sm' | 'md' | 'lg';
}
const Input = (props: PropsInput): JSX.Element => {
  const inputClass = `${styles.input} ${styles[props.size]}`;
  const wrapperClass = `${styles.wrapperInput} ${styles[props.variant]}`;
  return (
    <div className={wrapperClass}>
      <input className={inputClass} />
    </div>
  );
};
export default Input;
