import Button from '../Button';
import ColorSwatch from '../ColorSwatch';
import { ColorScheme as ColorSchemeType } from '../../data/colorScheme';
import styles from './ColorScheme.module.css';

type colorSchemeProps = {
  buttonType: 'save' | 'delete';
  colorSchemeData: ColorSchemeType;
  colorSchemeTitle?: string;
};

function ColorScheme({
  buttonType,
  colorSchemeData,
  colorSchemeTitle,
}: colorSchemeProps) {
  const button = <Button type={buttonType} />;
  const baseColorSwatch = (
    <ColorSwatch
      colorCode={colorSchemeData.seed.hex.value}
      colorName={colorSchemeData.seed.name.value}
      textColor={colorSchemeData.seed.contrast.value}
    />
  );
  const remainingColorSwatches = colorSchemeData.colors.map((color) => (
    <ColorSwatch
      colorCode={color.hex.value}
      colorName={color.name.value}
      textColor={color.contrast.value}
    />
  ));

  return (
    <div className={styles.colorSchemeWrapper}>
      {colorSchemeTitle && (
        <p className="colorSchemeTitle">{colorSchemeTitle}</p>
      )}
      <div className={styles.colorScheme}>
        {baseColorSwatch}
        {remainingColorSwatches}
      </div>
      {button}
    </div>
  );
}

export default ColorScheme;
