import { ListGroup } from "react-bootstrap"
import useDataFetcher from "../hooks/dataFetcher"
import NewEntry from "./NewEntry"


const NewsList = () => {
  const type = "top" //todo pass it as parameter
  const { isLoading, stories } = useDataFetcher(type ? type : "top")
  return (
    <div>
      <h2>News List</h2>
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
