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
  return <p>ColorScheme</p>;
}

export default ColorScheme;
