import { useState, useEffect } from 'react';
import ColorScheme from '../components/ColorScheme';
import colorHarmonyRules from '../data/colorHarmonyRules';

type SavedColorSchemeType = {
  [key: string]: any;
};

function Saved() {
  const [savedColorSchemes, setSavedColorSchemes] =
    useState<SavedColorSchemeType>({});

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedColorSchemes') || '{}');
    if (Object.keys(items).length !== 0) {
      setSavedColorSchemes(items);
    }
  }, []);

  let output = [];
  if (Object.keys(savedColorSchemes).length > 0) {
    for (const colorSchemeId in savedColorSchemes) {
      const colorScheme = savedColorSchemes[colorSchemeId];
      const colorSchemeRule = colorHarmonyRules[colorScheme.mode].title;
      const colorSchemeTitle =
        colorScheme.seed.hex.value +
        ' ' +
        colorScheme.seed.name.value +
        ' ' +
        colorSchemeRule;

      output.push(
        <ColorScheme
          buttonType="delete"
          colorSchemeData={savedColorSchemes[colorSchemeId]}
          colorSchemeTitle={colorSchemeTitle}
        />
      );
    }
  }

  return (
    <>
      <p>Saved page</p>
      {output}
    </>
  );
}

export default Saved;
