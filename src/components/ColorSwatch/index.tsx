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
    <div style={style}>
      <p>{colorCode}</p>
      <p>{colorName}</p>
    </div>
  );
}

export default ColorSwatch;
