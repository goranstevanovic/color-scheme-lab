import ColorHarmonyOptions from '../components/ColorHarmonyOptions';
import ColorScheme from '../components/ColorScheme';
import { colorSchemeSample } from '../data/colorScheme';

function Create() {
  return (
    <>
      <ColorHarmonyOptions />
      <ColorScheme buttonType="save" colorSchemeData={colorSchemeSample} />
    </>
  );
}

export default Create;
