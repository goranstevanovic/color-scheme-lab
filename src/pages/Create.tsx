import { useState } from 'react';
import ColorHarmonyOptions from '../components/ColorHarmonyOptions';
import ColorScheme from '../components/ColorScheme';
import { colorSchemeSample } from '../data/colorScheme';

function Create() {
  const [baseColor, setBaseColor] = useState('#2196F3');
  const [colorHarmonyRule, setColorHarmonyRule] = useState('monochrome');

  return (
    <>
      <ColorHarmonyOptions
        baseColor={baseColor}
        colorHarmonyRule={colorHarmonyRule}
        setBaseColor={(color: string) => setBaseColor(color)}
        setColorHarmonyRule={(rule: string) => setColorHarmonyRule(rule)}
      />
      Color harmony rule: {colorHarmonyRule}
      <ColorScheme buttonType="save" colorSchemeData={colorSchemeSample} />
    </>
  );
}

export default Create;
