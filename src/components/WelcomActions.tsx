"use client"

import React from 'react'

interface Props {
  setOnboarding: React.Dispatch<React.SetStateAction<any>>;
  onboarding: {
    username: string,
    onboarding: boolean
  };
}

const WelcomActions = ({ onboarding, setOnboarding }: Props) => {

  return (
    <>
      <h2 className="font-bold text-lg md:text-2xl max-w-10/12 lg:w-8/12">
        game where you have to click all the images without clicking the same image twice.
      </h2>

      <div className="flex flex-col gap-4 mt-16 lg:mt-32">
      <button
        className="w-60 font-bold rounded-md bg-[#7533cf]/90 hover:bg-[#7533cf] p-4"
        onClick={
          () =>  setOnboarding({ ...onboarding, username: "guest", onboarding: false})
        }
      >
        Guest
      </button>
      <div className="flex flex-col gap-2 mt-8">
        <input
          placeholder="Type Username"
          className="border-[#7533cf] border-2 rounded-md outline-none p-4 py-2 bg-[#7533cf70] placeholder:text-yellow-500/80 font-bold"
          onChange={(e) => setOnboarding({ ...onboarding, username: e.target.value})}
          value={onboarding.username}
        />
        <button
          className="w-60 font-bold rounded-md bg-[#7533cf]/90 hover:bg-[#7533cf] p-4"
          disabled={onboarding.username.length < 3}
          onClick={() => setOnboarding({ ...onboarding, onboarding: false})}
        >
          Submit
        </button>
      </div>
    </div>
  </>

  )
}

export default WelcomActions