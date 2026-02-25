import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Проект выполнен в рамках стажировки{' '}
      <a
        href="https://preax.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        PREAX
      </a>
    </footer>
  )
}

export default Footer;