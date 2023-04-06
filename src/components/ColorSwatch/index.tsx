import styles from './ColorSwatch.module.css';

type textColorType = '#ffffff' | '#000000';

type colorSwatchProps = {
  colorCode: string;
  colorName: string;
  textColor: string;
};

function ColorSwatch({ colorCode, colorName, textColor }: colorSwatchProps) {
  const style = {
    backgroundColor: colorCode,
    color: textColor,
  };

  return (
    <div className={styles.colorSwatch} style={style}>
      <p className={styles.colorCode}>{colorCode}</p>
      <p className={styles.colorName}>{colorName}</p>
    </div>
  );
}

export default ColorSwatch;
