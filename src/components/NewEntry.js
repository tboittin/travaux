import styles from "../styles/NewEntry.module.scss"
import { displayTime } from "../utils/displayTime"

const NewEntry = ({ story }) => {
  const { id, url, title, score, time, by: user } = story
  const commentURL = "https://news.ycombinator.com/item?id=" + id

  return (
    <div className={styles.NewEntry}>
      <h3>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <p>
        {score} points by {user} {displayTime(time)} - {' '}
        <a href={commentURL} target="_blank" rel="noreferrer">
          comments
        </a>
      </p>
    </div>
  )
}

export default NewEntry
