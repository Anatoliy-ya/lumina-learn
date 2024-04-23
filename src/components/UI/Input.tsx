import styles from './Input.module.scss';
import { Control, Controller } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';

interface PropsInput {
  children?: React.ReactNode;
  value?: string;
  variant: 'primary' | 'secondary' | 'accent';
  size: 'ssm' | 'sm' | 'md' | 'lg';
  name: string;
  type: string;
  id: string;
  placeholder: string;

  control?: Control;
  mask?: string;
}

const Input = (props: PropsInput): JSX.Element => {
  const inputClass = `${styles.input} ${styles[props.size]}`;
  const wrapperClass = `${styles.wrapperInput} ${styles[props.variant]}`;

  return (
    <>
      <label htmlFor={props.id} className={styles.name}>
        {props.name}
      </label>
      <div className={wrapperClass}>
        {props.mask && props.control ? (
          <Controller
            name={props.name}
            control={props.control}
            defaultValue=""
            render={({ field }) => (
              <ReactInputMask
                {...field}
                mask={props.mask!}
                className={inputClass}
                id={props.id}
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
              />
            )}
          />
        ) : (
          <input
            value={props.value}
            className={inputClass}
            id={props.id}
            placeholder={props.placeholder}
            type={props.type}
          />
        )}
      </div>
    </>
  );
};
export default Input;
