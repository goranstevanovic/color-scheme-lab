import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.heading}>Color Scheme Lab</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Create</a>
          </li>
          <li>
            <a href="/">Saved</a>
          </li>
        </ul>
      </nav>
      <div>
        <label htmlFor="color-mode">Color mode</label>
        <select id="color-mode">
          <option value="hex">HEX</option>
          <option value="rgb">RGB</option>
          <option value="hsl">HSL</option>
          <option value="hsv">HSV</option>
          <option value="cmyk">CMYK</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
