type textColorType = '#ffffff' | '#000000';

type colorSwatchProps = {
  colorCode: string;
  colorName: string;
  textColor: textColorType;
};

function ColorSwatch({ colorCode, colorName, textColor }: colorSwatchProps) {
  return <p>ColorSwatch</p>;
}

export default ColorSwatch;
