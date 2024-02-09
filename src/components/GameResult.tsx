import React from 'react'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  result: boolean | null
}

const GameResult = ({ result, onClick }: Props) => {
  return (
    <div className='w-full h-full flex flex-col gap-8 justify-center items-center'>
      <div
        className='text-3xl font-bold cursor-pointer'
      >
        {
          result == true
            ? "You Win Go To Next Level"
            : "You Loss Try Again"
        }
      </div>
      <button
      className="block w-60 font-bold rounded-md bg-[#7533cf]/90 hover:bg-[#7533cf] p-4"
        onClick={onClick}
        >
        {
          result == true
            ? "Next Level"
            : "Try Again"
        }
      </button>
    </div>

  )
}

export default GameResult