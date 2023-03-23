function ColorHarmonyOptions() {
  return (
    <section>
      <div>
        <label htmlFor="base-color">Base color</label>
        <input id="base-color" type="color" value="#2196F3" />
      </div>
      <div>
        <label htmlFor="color-harmony-rule">Color harmony rule</label>
        <select id="color-harmony-rule">
          <option value="analogic">Analogous</option>
          <option value="monochrome">Monochromatic</option>
          <option value="triad">Triad</option>
          <option value="complement">Complementary</option>
          <option value="analogic-complement">Split Complementary</option>
          <option value="quad">Square</option>
        </select>
      </div>
      <div>
        <p>
          This color scheme creates a sense of harmony and unity, as the colors
          blend together seamlessly. It can convey a feeling of warmth and
          comfort. This scheme is best used when you want to create a peaceful,
          relaxing mood, such as in a bedroom or spa.
        </p>
      </div>
      <button>Create Color Scheme</button>
    </section>
  );
}

export default ColorHarmonyOptions;
