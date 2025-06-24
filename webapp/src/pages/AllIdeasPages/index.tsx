import { trpc } from '../../lib/trpc'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery()

  if (isLoading ) return <span>Loading...</span>
  if (isError) return <span>Error:{error?.message}</span>

  console.log(data, 'data')

  return (
    <div>
      <h1>All Ideas</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.nick}>
          <div>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
