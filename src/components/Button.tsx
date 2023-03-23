import styles from './Button.module.css';

type buttonType = 'create' | 'save' | 'delete';

type buttonProps = {
  type: buttonType;
  children: string;
};

function Button({ type, children }: buttonProps) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
