import { useState } from 'react';
import ColorHarmonyOptions from '../components/ColorHarmonyOptions';
import ColorScheme from '../components/ColorScheme';
import {
  ColorScheme as ColorSchemeType,
  colorSchemeSample,
} from '../data/colorScheme';

function Create() {
  const [baseColor, setBaseColor] = useState('#2196F3');
  const [colorHarmonyRule, setColorHarmonyRule] = useState('monochrome');
  const [colorSchemeData, setColorSchemeData] = useState(colorSchemeSample);

  return (
    <>
      <ColorHarmonyOptions
        baseColor={baseColor}
        colorHarmonyRule={colorHarmonyRule}
        setBaseColor={(color: string) => setBaseColor(color)}
        setColorHarmonyRule={(rule: string) => setColorHarmonyRule(rule)}
        setColorSchemeData={(colorSchemeData: ColorSchemeType) =>
          setColorSchemeData(colorSchemeData)
        }
      />
      <ColorScheme buttonType="save" colorSchemeData={colorSchemeData} />
    </>
  );
}

export default Create;
