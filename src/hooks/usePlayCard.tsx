import { useEffect, useMemo, useState } from "react";

export type Card = {
  id: number;
  tag: string;
  url: string;
  statu: boolean;
}
const usePlayCard = () => {

  const ApiCards = [
    {
      id:1,
      tag: 'Arthur',
      url:'https://i.pinimg.com/236x/5e/a1/78/5ea178b08f3e5c017475e9723930bc27.jpg',
      statu: false
    },
    {
      id:2,
      tag: 'Ninga unique',
      url:'https://wallpapers.com/images/high/cool-anime-phone-ninja-unique-art-46gdftaaisrsqraf.webp',
      statu: false
    },
    {
      id:3,
      tag: 'Gon',
      url:'https://i.pinimg.com/236x/c5/6b/53/c56b532d0f127912e0e6ddb42494eebe.jpg',
      statu: false
    },
    {
      id:4,
      tag: 'Hisoka',
      url:'https://i.pinimg.com/236x/c4/a7/ec/c4a7ec9f7cc73d75603fb55486430c46.jpg',
      statu: false
    },
    {
      id:5,
      tag: 'Ichgo',
      url:'https://wallpapercave.com/wp/wp2768274.jpg',
      statu: false
    },
    {
      id:6,
      tag: 'Itashi',
      url:'https://i.pinimg.com/236x/4f/d7/d4/4fd7d48b6f67470d6026ceadd6bd91b0.jpg',
      statu: false
    },
    {
      id:7,
      tag: 'Katakuri',
      url:'https://i.pinimg.com/236x/0b/f5/f7/0bf5f7da99153ac7a109053cc4c2d0fe.jpg',
      statu: false
    },
    {
      id:8,
      tag: 'Killua',
      url:'https://i.pinimg.com/236x/7d/47/34/7d473478150df747371bf9ad401a49f0.jpg',
      statu: false
    },
    {
      id:9,
      tag: 'Kurapika',
      url:'https://i.pinimg.com/236x/ab/46/fc/ab46fc7cf10f114b24acdd747be87e4e.jpg',
      statu: false
    },
    {
      id:10,
      tag: 'Mazino',
      url:'https://i.pinimg.com/236x/0d/0b/d1/0d0bd1432beab9409a35e41800ad46b1.jpg',
      statu: false
    },
    {
      id:11,
      tag: 'Nanika',
      url:'https://i.pinimg.com/564x/ef/84/ca/ef84ca584e0b2e72163bb128f82d6609.jpg',
      statu: false
    },
    {
      id:12,
      tag: 'Pito',
      url:'https://i.pinimg.com/236x/b7/95/fc/b795fc246f150820fc7191f63a70f60d.jpg',
      statu: false
    },
    {
      id:13,
      tag: 'Tama',
      url:'https://i.pinimg.com/564x/22/1c/9c/221c9c85dc5f54170abd88fc5499758d.jpg',
      statu: false
    },
    {
      id:14,
      tag: 'Zaraki',
      url:'https://i.pinimg.com/236x/9d/50/89/9d50890e3410094e62a58ab87a12b0a8.jpg',
      statu: false
    },
    {
      id:15,
      tag: 'Zoro',
      url:'https://i.pinimg.com/236x/d8/21/f4/d821f446c45bf6bbbdb801974e26c85e.jpg',
      statu: false
    },
    {
      id:16,
      tag: 'Suoh Mikoto',
      url:'https://i.pinimg.com/736x/af/64/aa/af64aa1348863f73d73502d24a6b9019.jpg',
      statu: false
    },
    {
      id:17,
      tag: 'Gogo',
      url:'https://i.pinimg.com/236x/6b/b1/af/6bb1af850c52f37c4ae4d16b142b9696.jpg',
      statu: false
    },
    {
      id:18,
      tag: 'Levi ackerman',
      url:'https://i.pinimg.com/236x/0f/2a/ca/0f2aca15b869777a310ef415a7056697.jpg',
      statu: false
    },
    {
      id:19,
      tag: 'Sukuna',
      url:'https://i.pinimg.com/236x/e9/22/f9/e922f9f43094a4f28bc5f25781428873.jpg',
      statu: false
    },
    {
      id:20,
      tag: 'Jujutsu Kaisen',
      url:'https://i.pinimg.com/236x/81/32/67/81326797ad0bcc9861cda2b1b0fdc8d4.jpg',
      statu: false
    },
    {
      id:21,
      tag: 'One Piece',
      url:'https://i.pinimg.com/236x/3d/b9/77/3db9779bcbe5150a77d0f1b894ce7c66.jpg',
      statu: false
    },
    {
      id:22,
      tag: 'Jujutsu Kaisen',
      url:'https://i.pinimg.com/236x/20/f1/b2/20f1b2246a5544730687d2e29549823b.jpg',
      statu: false
    },
    {
      id:23,
      tag: 'Luffy',
      url:'https://i.pinimg.com/236x/cd/27/07/cd2707c26028eaa91de3cbabb767562c.jpg',
      statu: false
    },
    {
      id:24,
      tag: 'Saturo Gojo',
      url:'https://i.pinimg.com/236x/ad/88/b9/ad88b9a7ee58a8145fa1f3be826a57b7.jpg',
      statu: false
    },
    {
      id:25,
      tag: 'Hindo',
      url:'https://i.pinimg.com/236x/f1/5b/55/f15b55e429e0f26687bb3c31317659d5.jpg',
      statu: false
    },
    {
      id:26,
      tag: 'Shop Cat',
      url:'https://i.pinimg.com/236x/1d/23/e6/1d23e65f812563cdf4a80c014140af6f.jpg',
      statu: false
    },
    {
      id:27,
      tag: 'Spooky Cat',
      url:'https://i.pinimg.com/236x/2c/50/d1/2c50d111f2b8e19d55c875762cf39f51.jpg',
      statu: false
    },
    {
      id:28,
      tag: 'Space',
      url:'https://i.pinimg.com/236x/6c/e3/6d/6ce36df47fa9211efac6c4a67ab9d847.jpg',
      statu: false
    },
    {
      id:29,
      tag: 'Memories',
      url:'https://i.pinimg.com/236x/c2/99/71/c2997194e7601ff50e28fc879d2a77c6.jpg',
      statu: false
    },
    {
      id:30,
      tag: 'Euphoric',
      url:'https://i.pinimg.com/236x/9e/d0/94/9ed09419000fedf16ab16f6214b9585f.jpg',
      statu: false
    },
    {
      id:31,
      tag: 'Totoro',
      url:'https://i.pinimg.com/236x/33/ab/85/33ab852fe152b1f4610aab137443439d.jpg',
      statu: false
    },
    {
      id:32,
      tag: 'Osaka',
      url:'https://i.pinimg.com/236x/85/a2/1e/85a21e94194df18634428784a80456b5.jpg',
      statu: false
    },
    {
      id:33,
      tag: 'Evee Kamado',
      url:'https://i.pinimg.com/236x/3d/1d/bd/3d1dbd4e73d06812495209b3bbba5fec.jpg',
      statu: false
    },
    {
      id:34,
      tag: 'Gojo',
      url:'https://i.pinimg.com/236x/8f/df/8d/8fdf8d4293ed3ab866fefc766ed4e479.jpg',
      statu: false
    },
    {
      id:35,
      tag: 'Tanjiro Kamado',
      url:'https://i.pinimg.com/236x/72/71/0b/72710bd4197858702e983cbecb18b6d7.jpg',
      statu: false
    },
    {
      id:36,
      tag: 'Zinetsu',
      url:'https://i.pinimg.com/236x/dd/e8/3e/dde83e1a3738b62cc2b517278ea195ee.jpg',
      statu: false
    },
    {
      id:37,
      tag: 'Inosuke',
      url:'https://i.pinimg.com/236x/41/f5/29/41f5296cb0a2f324a605695afd81d281.jpg',
      statu: false
    },
    {
      id:38,
      tag: 'Deku',
      url:'https://i.pinimg.com/236x/04/ec/cd/04eccd72ab525c7f6a3a1a0e75bce126.jpg',
      statu: false
    },
    {
      id:39,
      tag: 'Demon Slayer',
      url:'https://i.pinimg.com/236x/e3/ba/81/e3ba817ace16e2d9e1744d8a4964234e.jpg',
      statu: false
    },
    {
      id:30,
      tag: 'Otaku',
      url:'https://i.pinimg.com/236x/e4/14/b7/e414b781ef971cb19bc3478ff48f9bcf.jpg',
      statu: false
    },
    {
      id:41,
      tag: 'Tower of God',
      url:'https://i.pinimg.com/236x/50/e0/09/50e0095690e2daaf95a409aa1e4cd9c2.jpg',
      statu: false
    },
    {
      id:42,
      tag: 'Lo po bia',
      url:'https://i.pinimg.com/236x/71/db/22/71db228f3a51439ee4cc984c120e3d08.jpg',
      statu: false
    },
    {
      id:43,
      tag: 'Ray',
      url:'https://i.pinimg.com/236x/e8/57/02/e857021f5c55b5888197ffaee1f81397.jpg',
      statu: false
    },
    {
      id:44,
      tag: 'Jue Viole Grace',
      url:'https://i.pinimg.com/236x/2a/48/87/2a48875b04a458ac45a92b7ffec0472e.jpg',
      statu: false
    },
    {
      id:45,
      tag: 'Data Jahad',
      url:'https://i.pinimg.com/236x/b4/92/e8/b492e8d9e654675886d6b644f575fba0.jpg',
      statu: false
    },
    {
      id:46,
      tag: 'Tower of bable',
      url:'https://i.pinimg.com/236x/ea/39/84/ea398476045925d007b2584fee8681ff.jpg',
      statu: false
    },
    {
      id:47,
      tag: 'Marquise house',
      url:'https://i.pinimg.com/236x/42/d8/3c/42d83c29f543e9e7f50a562e26f4e423.jpg',
      statu: false
    },
    {
      id:48,
      tag: 'Charllote',
      url:'https://i.pinimg.com/236x/37/e9/5c/37e95c23dbfb4b8cf7dca11f6b7d7dac.jpg',
      statu: false
    },
    {
      id:49,
      tag: 'Jack',
      url:'https://i.pinimg.com/236x/74/19/09/74190908e64e67eafbd520e72981a7bb.jpg',
      statu: false
    },
    {
      id:50,
      tag: 'Valentine milos',
      url:'https://i.pinimg.com/236x/42/fe/11/42fe11d47530f7dee6389440e6d44276.jpg',
      statu: false
    },
    {
      id:51,
      tag: 'Baek Cheon',
      url:'https://i.pinimg.com/236x/15/fa/8b/15fa8bdf8224941d2eaaf4c64feb32db.jpg',
      statu: false
    },
    {
      id:52,
      tag: 'Chung myung',
      url:'https://i.pinimg.com/236x/8b/de/56/8bde56efabc268678feaada0fbf43b71.jpg',
      statu: false
    },
    {
      id:53,
      tag: 'Yoo Iseol',
      url:'https://i.pinimg.com/236x/b8/59/43/b859431bc1c26dff13f40e3e4f96e117.jpg',
      statu: false
    },
    {
      id:54,
      tag: 'Hua sect',
      url:'https://i.pinimg.com/236x/4e/87/d8/4e87d83c9eb4e122aa5a63e755f97b7a.jpg',
      statu: false
    },
    {
      id:55,
      tag: 'Yang kai',
      url:'https://i.pinimg.com/236x/a6/3b/fb/a63bfb46cd01ae0e43fda597185a3f84.jpg',
      statu: false
    },
    {
      id:56,
      tag: 'Jhon',
      url:'https://i.pinimg.com/236x/8c/b9/93/8cb9933f77f1f7dfed05d4e59d41add3.jpg',
      statu: false
    },
    {
      id:57,
      tag: 'Retsu Unohana',
      url:'https://i.pinimg.com/236x/c5/f6/25/c5f625aac220d2e68414df2cecfe98e7.jpg',
      statu: false
    },
    {
      id:58,
      tag: 'Monkey D Luffy',
      url:'https://i.pinimg.com/236x/38/c8/6e/38c86eb987d1ab5cbb969507eb4c6589.jpg',
      statu: false
    },
    {
      id:59,
      tag: 'Himiko Toga',
      url:'https://i.pinimg.com/236x/7f/90/79/7f907968ed8ecb7d0b7348b681e1bbe6.jpg',
      statu: false
    },
    {
      id:60,
      tag: 'Sukuna',
      url:'https://i.pinimg.com/236x/ce/fc/77/cefc77d4171bbd039eee3e15d4bed0a0.jpg',
      statu: false
    },
    {
      id:61,
      tag: 'Gohan ssj',
      url:'https://i.pinimg.com/236x/18/65/09/1865095705ea9c8e0a09af789a51ffc2.jpg',
      statu: false
    },
    {
      id:62,
      tag: 'Goku',
      url:'https://i.pinimg.com/236x/6d/d5/ca/6dd5ca063c33a4a4a96047ddee3f5331.jpg',
      statu: false
    },
    {
      id:63,
      tag: 'Goku',
      url:'https://i.pinimg.com/236x/cd/c1/ef/cdc1ef397a46564bb46d3d60926a6aec.jpg',
      statu: false
    },
    {
      id:64,
      tag: 'Luffy Gear 5',
      url:'https://i.pinimg.com/236x/b4/80/f3/b480f3a398395421cd6f195dfd7760bb.jpg',
      statu: false
    },
    {
      id:65,
      tag: 'Vegeta',
      url:'https://i.pinimg.com/236x/1e/d4/2f/1ed42f804548eeaa0ee27060a6009a7e.jpg',
      statu: false
    },
    {
      id:66,
      tag: 'Pin by byron',
      url:'https://i.pinimg.com/236x/f8/f8/99/f8f899eb8a4c8ee89220e6f2d35fde72.jpg',
      statu: false
    },
    {
      id:67,
      tag: 'Jiren',
      url:'https://i.pinimg.com/236x/23/74/5e/23745e639c294bf4345bd02cbbba377d.jpg',
      statu: false
    },
    {
      id:68,
      tag: 'Trunks',
      url:"https://i.pinimg.com/236x/e0/e7/76/e0e7762da28e90b5e40be6e32ee94742.jpg",
      statu: false
    },
    {
      id:69,
      tag: 'Kid Boo',
      url:'https://i.pinimg.com/236x/62/d9/35/62d935fe8cd600fbdba6100c725787d5.jpg',
      statu: false
    },
    {
      id:70,
      tag: 'Ultr Igo',
      url:'https://i.pinimg.com/236x/86/33/a8/8633a8a80028057da6a4c0a4c68af7f5.jpg',
      statu: false
    },
    {
      id:71,
      tag: 'Geto Suguru',
      url:'https://i.pinimg.com/236x/72/10/90/721090c938c23be4d7e31b131a0bda21.jpg',
      statu: false
    },
    {
      id:72,
      tag: 'Kochou Shinobu',
      url:'https://i.pinimg.com/236x/f0/77/f1/f077f175869f588f3ac31582f49e2a8d.jpg',
      statu: false
    },
    {
      id:73,
      tag: 'Neighborhood',
      url:'https://i.pinimg.com/736x/18/2d/7a/182d7a6ffbd095172ad04a8af7450eb6.jpg',
      statu: false
    },
    {
      id:74,
      tag: 'Solo Leveling',
      url:'https://i.pinimg.com/736x/64/f8/bf/64f8bfaabdb07888c11d02a6e508a0c8.jpg',
      statu: false
    },
    {
      id:75,
      tag: 'Ukeclvd',
      url:'https://i.pinimg.com/236x/b3/6d/2b/b36d2b8b14ea0f9c8463a3247bf7af1b.jpg',
      statu: false
    },
    {
      id:76,
      tag: 'Gintoki',
      url:'https://i.pinimg.com/236x/a4/b1/e2/a4b1e241cebd92e38e4e7ffefbdff352.jpg',
      statu: false
    },
    {
      id:77,
      tag: 'Zoro',
      url:'https://i.pinimg.com/236x/d8/21/f4/d821f446c45bf6bbbdb801974e26c85e.jpg',
      statu: false
    },
    {
      id:78,
      tag: 'Gintama',
      url:'https://i.pinimg.com/236x/8e/38/fc/8e38fc2eb837e0d8f58c898983dca940.jpg',
      statu: false
    },
    {
      id:79,
      tag: 'Tsukuyo',
      url:'https://i.pinimg.com/236x/e9/ab/80/e9ab80fae61a4dd2da11a4d336ecc6ca.jpg',
      statu: false
    },
    {
      id:80,
      tag: 'Kagura',
      url:'https://i.pinimg.com/236x/a6/a9/52/a6a9525e4eee5ff0529bc24751de4209.jpg',
      statu: false
    },
    {
      id:81,
      tag: 'Wanderer Genshin',
      url:'https://i.pinimg.com/736x/a0/9b/a3/a09ba3dd632efa5d13d743a818921a04.jpg',
      statu: false
    },
    {
      id:82,
      tag: 'Ken Kaneki',
      url:'https://wallpapers.com/images/high/ken-kaneki-4k-anime-phone-0oi2a391lds2pu0z.webp',
      statu: false
    },
    {
      id:83,
      tag: 'Hero Academia',
      url:'https://wallpapers.com/images/high/my-hero-academia-4k-anime-phone-2s15vl9udhp458p9.webp',
      statu: false
    },
    {
      id:84,
      tag: 'Buruto Jogan',
      url:'https://wallpapers.com/images/high/boruto-jogan-4k-anime-phone-5y5x3nu0f63edzan.webp',
      statu: false
    },
    {
      id:85,
      tag: 'Kakashi Hatake',
      url:'https://wallpapers.com/images/high/kakashi-hatake-4k-anime-phone-bjmkoyga02nsv5ca.webp',
      statu: false
    },
    {
      id:86,
      tag: 'Demon Slayer',
      url:'https://wallpapers.com/images/high/demon-slayer-4k-anime-phone-cli2plny07hbwnsa.webp',
      statu: false
    },
    {
      id:87,
      tag: 'Katekyo Reborn',
      url:'https://wallpapers.com/images/high/katekyo-from-anime-reborn-4k-phone-geqepqfet5306sbk.webp',
      statu: false
    },
    {
      id:88,
      tag: 'Fuzichoco',
      url:'https://wallpapers.com/images/high/fuzichoco-4k-anime-phone-ggdfhm98pwurmorq.webp',
      statu: false
    },
    {
      id:89,
      tag: 'MiKasa Ackerman',
      url:'https://wallpapers.com/images/high/mikasa-ackerman-4k-anime-phone-kiixbi9j0komjaqj.webp',
      statu: false
    },
    {
      id:90,
      tag: 'Eren Yeager',
      url:'https://wallpapers.com/images/high/eren-yeager-4k-anime-phone-kmj7zktnvi66uedg.webp',
      statu: false
    },
    {
      id:91,
      tag: 'Obito Uchiha',
      url:'https://wallpapers.com/images/high/obito-uchiha-from-naruto-4k-anime-phone-osnkeyeokiv1qzyv.webp',
      statu: false
    },
    {
      id:92,
      tag: 'Spongebob',
      url:'https://wallpapers.com/images/high/cute-aesthetic-spongebob-cartoon-y4f87ri8d22pdhaa.webp',
      statu: false
    },
    {
      id:93,
      tag: 'Jiraiya',
      url:'https://wallpapers.com/images/high/jiraiya-4k-laughing-fhtqkl42ylmmdq25.webp',
      statu: false
    },
    {
      id:94,
      tag: 'Inteleon',
      url:'https://wallpapers.com/images/high/inteleon-walking-on-ocean-water-tbjmdg23ov6wy6rj.webp',
      statu: false
    },
    {
      id:95,
      tag: 'Tamaki Amajiki',
      url:'https://wallpapers.com/images/high/tamaki-amajiki-ufami6gv1rxnvgtq.webp',
      statu: false
    },
    {
      id:96,
      tag: 'Ghibli',
      url:'https://wallpapers.com/images/high/studio-ghibli-phone-63yq6t3vxte9cu2q.webp',
      statu: false
    },
    {
      id:97,
      tag: 'Monokuma',
      url:'https://wallpapers.com/images/high/monokuma-27me7l2bn6a9mx0c.webp',
      statu: false
    },
    {
      id:98,
      tag: 'Unordinary',
      url:'https://wallpapers.com/images/high/unordinary-850-x-1202-3zispytds37io0e6.webp',
      statu: false
    },
    {
      id:99,
      tag: 'Pangoro',
      url:'https://wallpapers.com/images/high/green-aesthetic-pangoro-portrait-19l7ux5ywano5t78.webp',
      statu: false
    },
    {
      id:100,
      tag: 'Doraemon',
      url:'https://wallpapers.com/images/high/cool-anime-phone-doraemon-and-nobita-i491hufx8wdyaf19.webp',
      statu: false
    }
  ]

  const [cards, setCards] = useState<Card[]>(ApiCards)
  const [status, setStatus] = useState<any>({
    level: 0,
    maxLevel: 0,
    score: 0,
    roundeScore: 0,
    maxScore: 0,
    win: null,
    loss: null
  })

  const refresh = useMemo(() => (playCards: Card[]) => {
    let result = [];// new array
    let lents = 4 + (2 * status.level);// count number of cards
    for (let index = 0; index < lents; index++) {// loop on all item
      let random = Math.floor( Math.random() * playCards.length );//get radom number not great then length of array
      result[index] = playCards[random];// assign the value to the new array
      playCards.splice(random, 1);// remove from the root array
    }
    return result;
  }, [status.level])
  
  useEffect(() => {
    if(ApiCards.length > 3) setCards(refresh(ApiCards));
    // setStatus({...status, win: null, loss: null})
  }, [status.level])

  const shuffoldCards = () => { 
    for (let i = cards.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [cards[i], cards[j]] = [cards[j], cards[i]]; 
    } 
    return cards; 
  }

  return { cards, setCards, setStatus, status, shuffoldCards }

}
export { usePlayCard };
