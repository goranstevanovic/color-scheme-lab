import styles from './Button.module.css';

type buttonType = 'create' | 'save' | 'delete';

type buttonProps = {
  type: buttonType;
};

function Button({ type }: buttonProps) {
  let classes = styles.button;
  let text;

  switch (type) {
    case 'create':
      classes += ' ' + styles.create;
      text = 'Create Color Scheme';
      break;
    case 'save':
      classes += ' ' + styles.save;
      text = 'Save Color Scheme';
      break;
    case 'delete':
      classes += ' ' + styles.delete;
      text = 'Delete Color Scheme';
      break;
  }

  return <button className={classes}>{text}</button>;
}

export default Button;
