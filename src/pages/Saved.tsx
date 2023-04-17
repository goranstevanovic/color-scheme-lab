import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const deleteColorScheme = (colorSchemeId: string) => {
    const updatedSavedColorSchemes: SavedColorSchemeType = {};
    for (let [key, value] of Object.entries(savedColorSchemes)) {
      if (key !== colorSchemeId) {
        updatedSavedColorSchemes[key] = value;
      }
    }
    setSavedColorSchemes(updatedSavedColorSchemes);
    localStorage.setItem(
      'savedColorSchemes',
      JSON.stringify(updatedSavedColorSchemes)
    );
  };

  let colorSchemeElements = [];
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

      colorSchemeElements.push(
        <ColorScheme
          buttonType="delete"
          colorSchemeData={savedColorSchemes[colorSchemeId]}
          colorSchemeTitle={colorSchemeTitle}
          clickHandler={() => deleteColorScheme(colorSchemeId)}
        />
      );
    }
  }

  const noSavedColorSchemesElement = (
    <>
      <p>There are no saved color schemes.</p>
      <p>
        You can <Link to="/">create</Link> one easily and save it for later.
      </p>
    </>
  );

  const output =
    colorSchemeElements.length > 0
      ? colorSchemeElements
      : noSavedColorSchemesElement;

  return <>{output}</>;
}

export default Saved;
