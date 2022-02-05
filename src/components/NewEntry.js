import styles from "../styles/NewEntry.module.scss"

const NewEntry = ({ story }) => {
  const { url, title, score, by: user } = story
  return (
    <div className={styles.NewEntry}>
      <h3>
        <a href={url} target="_blank" rel="noreferrer">{title}</a>
      </h3>
      <p>
        {score} points by {user}
      </p>
    </div>
  )
}

export default NewEntry
