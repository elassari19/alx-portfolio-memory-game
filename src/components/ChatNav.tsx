import React, { use } from 'react'
import useScrollToBottom from '../hooks/useScrollToBottom'

interface Props {
  user: string
}
const ChatNav = ({ user }: Props) => {
  // console.log(user)
  // const bottomRef = React.useRef(null);

  const [value, setValue] = React.useState('' as string)
  const [messages, setMessages] = React.useState([
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
    { text: 'Hello brother how you doing i hope well', username: 'user'},
  ])

  const { bottomRef } = useScrollToBottom({ dependencies: messages })

  // React.useEffect(() => {
  //   // @ts-ignore
  //   bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  // }, [messages])

  return (
    <div className='h-full relative'>
      <h2 className='font-bold bg-[#7533cf] p-2'>Chat With Players</h2>
      <div className='h-[70%] flex-1 overflow-auto'>
        {
          messages.map((msg, index) => (
            <div key={index} className='p-2 flex flex-col items-start text-sm'>
              <p className='text-start'>
                <strong className='underline font-bold'>@{msg.username}: </strong>
                {msg.text}
              </p>
            </div>
          ))
        }
        <div ref={bottomRef} />
      </div>
      <div className='w-full p-2 absolute bottom-0 left-0 bg-[#7533cf]/70'>
        <textarea placeholder='Type new message' rows={2}
          value={value} onChange={(e) => setValue(e.target.value)}
          className='w-full outline-none border-none text-white bg-inherit'
        />
        <button onClick={() => {setMessages([...messages, { text: value, username: user }]), setValue('')}}
          className='w-full bg-[#ffd700] p-2 rounded-md text-black font-bold'
        >Send</button>
      </div>
    </div>
  )
}

export default ChatNav