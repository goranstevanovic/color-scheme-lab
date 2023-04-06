import Button from '../Button';
import ColorSwatch from '../ColorSwatch';
import { ColorScheme as ColorSchemeType } from '../../data/colorScheme';

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

  return (
    <>
      {colorSchemeTitle && (
        <p className="colorSchemeTitle">{colorSchemeTitle}</p>
      )}
      <ColorSwatch />
      {button}
    </>
  );
}

export default ColorScheme;
