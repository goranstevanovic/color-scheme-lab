import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.heading}>Color Scheme Lab</h1>
      <div className={styles.menus}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Create
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Saved
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.colorMode}>
          <label htmlFor="color-mode">Color mode</label>
          <select id="color-mode">
            <option value="hex">HEX</option>
            <option value="rgb">RGB</option>
            <option value="hsl">HSL</option>
            <option value="hsv">HSV</option>
            <option value="cmyk">CMYK</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
