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
  // For some color schemes, fetched color scheme data object contains `count`
  // field with correct number, but the `colors` array contains more colors
  // than necessary. `colorQty` is used to hold the actual number of colors
  // needed for current color scheme, and it's used to slice the `colors` array
  // to correct length
  const colorQty = Number(colorSchemeData.count);

  const button = <Button type={buttonType} onClick={() => {}} />;
  const baseColorSwatch = (
    <ColorSwatch
      colorCode={colorSchemeData.seed.hex.value}
      colorName={colorSchemeData.seed.name.value}
      textColor={colorSchemeData.seed.contrast.value}
    />
  );
  const remainingColorSwatches = colorSchemeData.colors
    .slice(0, colorQty)
    .map((color) => (
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
