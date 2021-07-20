import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import './index.css'
import styles from './components/css_modules/App.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function App() {
  return (
    <Router className={styles.app}>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/"> <LandingPage/> </Route>
          <Route exact path="/movies/:movieId"> <MovieDetails/> </Route>
        </Switch>
      </main>
    </Router>
  );
}
