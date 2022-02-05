import { ListGroup } from "react-bootstrap"

import useDataFetcher from "../hooks/dataFetcher"
import NewEntry from "./NewEntry"

import styles from "../styles/NewsList.module.scss"

const NewsList = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top")

  return (
    <div className={styles.NewsList}>
      <ListGroup as="ul">
        {!isLoading &&
          stories.map(
            ({ data: story }) =>
              story && (
                <ListGroup.Item as="li" key={story.id}>
                  <NewEntry story={story} />
                </ListGroup.Item>
              )
          )}
      </ListGroup>
    </div>
  )
}

export default NewsList
