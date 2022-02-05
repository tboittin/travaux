import styles from "../styles/NewEntry.module.scss"

const NewEntry = () => {
  return (
    <div className={styles.NewEntry}>
      <p className={styles.bigSkeleton}></p>
      <p className={styles.littleSkeleton}></p>
    </div>
  )
}

export default NewEntry
