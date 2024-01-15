import styles from './C.module.css'

const container = (props) => {
  return (
    <div className={styles.cont}>
      {props.children}
    </div>
  )
}

export default container
