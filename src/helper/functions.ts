const rotateCard = (id: string) => {
  const card = document.getElementById(id)?.firstChild;
  if (card) {
    // @ts-ignore
    card.classList.add('rotate-y-180');
  }
  setTimeout(()=>{
    // @ts-ignore
    if(card) card.classList.remove('rotate-y-180');
  },1000)
  
}

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export { rotateCard, delay }
