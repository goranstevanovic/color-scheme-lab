import Button from '../Button';
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
      <p>ColorScheme</p>
      {button}
    </>
  );
}

export default ColorScheme;
