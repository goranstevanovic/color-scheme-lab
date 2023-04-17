import { useState, useEffect } from 'react';

function Saved() {
  const [savedColorSchemes, setSavedColorSchemes] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedColorSchemes') || '{}');
    if (Object.keys(items).length !== 0) {
      setSavedColorSchemes(items);
    }
  }, []);

  return (
    <>
      <p>Saved page</p>
      {savedColorSchemes
        ? 'There are saved color schemes'
        : 'There are no saved color schemes'}
    </>
  );
}

export default Saved;
