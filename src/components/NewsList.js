import { ListGroup } from "react-bootstrap"

import useDataFetcher from "../hooks/dataFetcher"
import NewEntry from "./NewEntry"
import SkeletonEntry from "./SkeletonEntry"

import styles from "../styles/NewsList.module.scss"

const NewsList = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top")
  const skeletonArray30 = () => {
    let skeleton = []
    for (let i = 0; i < 30; i++) {
      skeleton[i] = i
    }
    return skeleton
  }
  return (
    <>
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
          {isLoading &&
            skeletonArray30().map(skeleton => (
              <ListGroup.Item as="li" key={skeleton}>
                <SkeletonEntry />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </>
  )
}

export default NewsList
