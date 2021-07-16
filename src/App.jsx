import './App.css';
import { MoviesGrid } from './components/MoviesGrid';
import styles from './css_modules/App.module.css'


export default function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid></MoviesGrid>
      </main>
    </div>
  );
}
