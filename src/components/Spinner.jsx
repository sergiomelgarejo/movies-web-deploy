import styles from './css_modules/Spinner.module.css'

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
    </div>
  )
}