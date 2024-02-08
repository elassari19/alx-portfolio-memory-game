import React from 'react'

interface Props {
  status: {
    score: number,
    level: number,
    maxLevel: number,
    maxScore: number,
    roundeScore: number
  }
}
const StatusGame = ({ status }: Props) => {

  return (
    <div className="col-span-full text-xl font-bold mb-2 grid grid-cols-12">
      <div className="col-start-2 col-span-8 flex justify-between items-center">
      {/* <p>Score: {status.score}</p> */}
      <p>Score: {status.roundeScore}</p>
      <p>Level: {status.level + 1}</p>
      <p>High Score: {status.maxScore}</p>
      <p>High Level: {status.maxLevel}</p>
      </div>
    </div>
  )
}

export default StatusGame