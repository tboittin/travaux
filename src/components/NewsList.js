import useDataFetcher from "../hooks/dataFetcher"

const NewsList = () => {
  const type = "top" //todo pass it as parameter
  const { isLoading, stories } = useDataFetcher(type ? type : "top")
  console.log(stories)
  return (
    <div>
      <h2>News List</h2>
      <ul>
        {!isLoading &&
          stories.map(
            ({ data: story }) => story && <li key={story.id}>{story.id}</li>
          )}
      </ul>
    </div>
  )
}

export default NewsList
