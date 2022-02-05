import {useEffect} from 'react'

import { ListGroup } from "react-bootstrap"
import useDataFetcher from "../hooks/dataFetcher"
import NewEntry from "./NewEntry"

const NewsList = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top")

  return (
    <div>
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
