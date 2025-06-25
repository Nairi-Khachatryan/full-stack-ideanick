import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getViewIdeasRoute } from '../../lib/routes'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery()

  if (isLoading) return <span>Loading...</span>
  if (isError) return <span>Error:{error?.message}</span>

  return (
    <div>
      <h1>All Ideas</h1>
      {data?.idea.map((idea) => (
        <div key={idea.nick}>
          <div>
            <h2>
              <Link to={getViewIdeasRoute({ ideaNick: idea.nick })}>{idea.name}</Link>
            </h2>
            <p>{idea.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
