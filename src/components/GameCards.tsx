
import React from 'react'
import Image from 'next/image'
import backCard from '@public/backcard.png'
import { delay, rotateCard } from '../helper/functions'
import { Card } from '../hooks/usePlayCard'

interface Props {
  cards: Card[],
  setCards: any,
  setStatus: any,
  status: any,
  shuffoldCards: any
}

const GameCards = ({ cards, setCards, setStatus, status, shuffoldCards }: Props) => {

  const handleCardClick = (id: string) => {
    rotateCard(id)

    const card = cards?.map((item) =>  {

      if(item.id != +id) return item
      if(item.statu == true){ // is lost
        setStatus({
          ...status, loss: true,
          maxScore: status.roundeScore, maxLevel: status.level > status.maxLevel ? status.level : status.maxLevel,
          roundeScore: 0,
          score: 0, level: 0
        })
        return item
      }
      if(item.id == +id) { // is win
        setStatus({
          ...status, score: status.score + 1, roundeScore: status.roundeScore + 1
        })
        if(status.score + 1 == cards.length) {
          setStatus({
            ...status, win: true,
            level: status.level + 1, score: 0,
            roundeScore: status.roundeScore + 1,
            maxScore: status.roundeScore >= status.maxScore ? status.roundeScore + 1 : status.maxScore
          })
        }
      }
      return ({ ...item, statu: true })
    })
    setCards(card)
  }

  if(status.win != true) {
    delay(1500).then(() => {
      shuffoldCards()
    })
  }
  console.log(status)

  if(status.win) {
    return (
      <div className='w-full h-full flex flex-col gap-8 justify-center items-center'>
        <div
          className='text-3xl font-bold cursor-pointer'
        >
          win go to next level
        </div>
        <button
        className="block w-60 font-bold rounded-md bg-[#7533cf]/90 hover:bg-[#7533cf] p-4"
        onClick={() => setStatus({ ...status, win: false })}
        >
        Start The Next Level
      </button>
      </div>
    )
  }
  
  return (
    <div className='flex flex-wrap justify-center items-center gap-2 transform-style-3d'>
      {
        cards?.slice(0, 32).map((img, index) => (
          <div key={index}
            id={img.id.toString()}
            onClick={() => handleCardClick(img.id.toString())}
            className="group perspective-1000 w-32 min-w-20 h-[12rem] rounded-lg cursor-pointer hover:scale-[200%] transform transition duration-500 ease-in-out overflow-hidden hover:z-50"
          >
            <div className="relative h-full w-full rounded-lg transition-all duration-500 transform-style-3d">
              <div className="absolute w-full h-full backface-hidden">
                <Image src={img?.url} alt={img.tag} width={100} height={100} className='w-full h-full rounded-lg' />
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div className="absolute w-full h-full flex justify-center items-center px-4">
                  <p className='font-bold text-sm z-40'>Don&lsquo;t Touche Me Again</p>
                </div>
                <Image src={backCard} alt="backcard" width={100} height={100} className=' absolute w-full h-full rounded-lg' />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default GameCards