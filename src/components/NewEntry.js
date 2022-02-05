import styles from "../styles/NewEntry.module.scss"

const NewEntry = ({ story }) => {
  const { id, url, title, score, by: user } = story
  const commentURL = "https://news.ycombinator.com/item?id=" + id
  return (
    <div className={styles.NewEntry}>
      <h3>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <p>
        {score} points by {user} -{" "}
        <a href={commentURL} target="_blank" rel="noreferrer">
          comments
        </a>
      </p>
    </div>
  )
}

export default NewEntry
