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

  const saveColorSchemeClickHandler = () => {
    const baseColorValue = colorSchemeData.seed.hex.clean.toLowerCase();
    const colorMode = colorSchemeData.mode;
    const colorSchemeKey = baseColorValue + '-' + colorMode;
    const savedColorSchemes = JSON.parse(
      localStorage.getItem('savedColorSchemes') || '{}'
    );
    const newSavedColorSchemes = {
      ...savedColorSchemes,
      [colorSchemeKey]: colorSchemeData,
    };
    localStorage.setItem(
      'savedColorSchemes',
      JSON.stringify(newSavedColorSchemes)
    );
  };

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
      <ColorScheme
        buttonType="save"
        colorSchemeData={colorSchemeData}
        clickHandler={saveColorSchemeClickHandler}
      />
    </>
  );
}

export default Create;
