import styles from './css_modules/SearchBar.module.css'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery'

export function SearchBar() {
  const [searchText, setSearchText] = useState("")
  const history = useHistory()
  const query = useQuery()
  const search = query.get("search")
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/?search=${searchText}`)
  }

  useEffect(() => {
    setSearchText(search || "")
  }, [search])

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.search_box}>
        <input className={styles.search_input} 
          type="text" 
          value={searchText}  
          onChange={(e) => setSearchText(e.target.value)} 
          placeholder="Search movies" 
        />
        <button className={styles.search_button} type="submit">
          <i className="material-icons">
            search
          </i>
        </button>
      </div>
    </form>    
  )
}