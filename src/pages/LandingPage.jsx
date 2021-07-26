import { MoviesGrid } from '../components/MoviesGrid';
import { SearchBar } from '../components/SearchBar';

export function LandingPage() {
  return (
    <div className="container">
        <div>
          <SearchBar />
          <MoviesGrid />
        </div>
    </div>      
  )
}