import { useEffect, useState } from "react";

export const useGameResult = async(state: any) => {
  const [card, setCard] = useState(state);

  let {score, gameState, level, highScore, highLevel, listCard, scoreLevel} = state;//distructuring
  let lent = listCard.length;// length
  let newcard = [...listCard];//assignment

  const AnimetedCard = (id: string) => {
    let element = document.querySelector(`[data-key='${id}']`);
    // @ts-ignore
    if(element) element.style.transform='rotateY(180deg)'
    setTimeout(()=>{
      // @ts-ignore
      if(element) element.style.transform='rotateX(0deg)'
    },300)
  }

  const RefreshCard = (arr: any[]) => {
    let refresh = [];// new array
    let lents = arr.length;// count number of cards
  
    for (let index = 0; index < lents; index++) {// loop on all item
      let random = Math.floor(Math.random()*arr.length);//get radom number not great then linght of array
  
      // assign the value to the new array
      refresh[index] = arr[random];
  
      // remove from the root array
      arr.splice(random,1);
    }
    return refresh;
  }

  const clickedCard = (id: string) => {
    listCard.filter((items: any,index: number) => {// looping to find the id
    let item = items[0];

    if(item.id===id){// is same id
      if(item.statu){//the card never clicked
        newcard[index][0].statu=false; // mark was clicked
        if(scoreLevel===lent-1){// check win in level
          setCard({gameState:'win'})//set statu
          setCard({level: level + 1, score: score + 1, scoreLevel: 0})// set new level
        }else{// not win yet
          setCard({score:score + 1,scoreLevel: scoreLevel + 1})// increment the score
        }
      }else{// the card was clicked then is lost
        if(score>highScore)setCard({highScore:score})//set high score
        if(level>highLevel)setCard({highLevel:level})//set high level
        setCard({score: 0,level:1,gameState:'lose',scoreLevel:0})
      }
    }
    })
  }

  useEffect(()=>{
    AnimetedCard(id)
    //save the the change in state (listCard)
    const game = RefreshCard(listCard);
    if(game.length !== 0){
      setCard({listCard: game})
    }
  } ,[state])

  return { card }
}
