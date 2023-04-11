import { useState } from 'react';
import ColorHarmonyOptions from '../components/ColorHarmonyOptions';
import ColorScheme from '../components/ColorScheme';
import { colorSchemeSample } from '../data/colorScheme';

function Create() {
  const [baseColor, setBaseColor] = useState('#2196F3');

  return (
    <>
      <ColorHarmonyOptions
        baseColor={baseColor}
        setBaseColor={(color: string) => setBaseColor(color)}
      />
      <ColorScheme buttonType="save" colorSchemeData={colorSchemeSample} />
    </>
  );
}

export default Create;
