import Header from './components/Header';
import ColorHarmonyOptions from './components/ColorHarmonyOptions';
import ColorScheme from './components/ColorScheme';
import { colorSchemeSample } from './data/colorScheme';

function App() {
  return (
    <>
      <Header />
      <ColorHarmonyOptions />
      <ColorScheme buttonType="save" colorSchemeData={colorSchemeSample} />
    </>
  );
}

export default App;
