import styles from './Text.module.scss';

interface PropsText {
  children: React.ReactNode;
  style: 'p' | 'span' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'a';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'slg';
  color: 'primary' | 'secondary' | 'accent' | 'text-color' | 'error-color' | 'success-color';
  className?: string;
  href?: string;
  id?: string;
}

const Text = (props: PropsText) => {
  const { style, size, color, children, className, href, id } = props;
  const TextClass = `${styles.text} ${styles[size]} ${styles[color]} ${className || ''}`;

  const Tag = style as keyof JSX.IntrinsicElements; // Использование типа для динамического тега

  const extraProps: Record<string, string | undefined> = {};
  if (style === 'a') {
    extraProps['href'] = href;
  } else if (style === 'label' && id) {
    extraProps['htmlFor'] = id;
  }

  return (
    <Tag className={TextClass} {...extraProps}>
      {children}
    </Tag>
  );
};

export default Text;
