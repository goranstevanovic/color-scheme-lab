import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import styles from './Root.module.css';

function Root() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
