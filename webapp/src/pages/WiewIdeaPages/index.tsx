import { useParams } from 'react-router-dom'
import React from 'react'

export const WievIdeaPages = () => {
  const { ideaNick } = useParams() as { ideaNick: string }

  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>description of idea 1</p>
      <div>
        <p>text paragraph 1</p>
        <p>text paragraph 1</p>
        <p>text paragraph 1</p>
      </div>
    </div>
  )
}
