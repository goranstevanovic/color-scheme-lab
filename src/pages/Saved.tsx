import { useState, useEffect } from 'react';
import ColorScheme from '../components/ColorScheme';

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
      output.push(
        <ColorScheme
          buttonType="delete"
          colorSchemeData={savedColorSchemes[colorSchemeId]}
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
