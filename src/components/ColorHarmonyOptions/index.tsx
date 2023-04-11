import Button from '../Button';
import styles from './ColorHarmonyOptions.module.css';
import colorHarmonyRules from '../../data/colorHarmonyRules';

type colorHarmonyOptionsProps = {
  baseColor: string;
  colorHarmonyRule: string;
  setBaseColor: Function;
  setColorHarmonyRule: Function;
  setColorSchemeData: Function;
};

function ColorHarmonyOptions({
  baseColor,
  colorHarmonyRule,
  setBaseColor,
  setColorHarmonyRule,
  setColorSchemeData,
}: colorHarmonyOptionsProps) {
  const baseColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseColor(e.target.value);
  };

  const colorHarmonyRuleChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setColorHarmonyRule(e.target.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.baseColor}>
        <label htmlFor="base-color">Base color</label>
        <input
          id="base-color"
          type="color"
          value={baseColor}
          onChange={baseColorChangeHandler}
        />
      </div>
      <div className={styles.colorHarmonyRule}>
        <label htmlFor="color-harmony-rule">Color harmony rule</label>
        <select
          id="color-harmony-rule"
          value={colorHarmonyRule}
          onChange={colorHarmonyRuleChangeHandler}
        >
          <option value="analogic">Analogous</option>
          <option value="monochrome">Monochromatic</option>
          <option value="triad">Triad</option>
          <option value="complement">Complementary</option>
          <option value="analogic-complement">Split Complementary</option>
          <option value="quad">Square</option>
        </select>
      </div>
      <p className={styles.description}>
        {colorHarmonyRules[colorHarmonyRule].description}
      </p>
      <Button type="create" />
    </section>
  );
}

export default ColorHarmonyOptions;
