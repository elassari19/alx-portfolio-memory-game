"use client"

import { useState } from "react";
import Title from "@components/Title";
import WelcomActions from "@components/WelcomActions";
import Image from "next/image";
import logo from "@public/logo.png";
import Link from "next/link";
import GameCards from "../../components/GameCards";
import StatusGame from "../../components/StatusGame";
import { usePlayCard } from "../../hooks/usePlayCard";

export default function Home() {
  const [onboarding, setOnboarding] = useState(true);
  const { cards, setCards, setStatus, status, shuffoldCards } = usePlayCard()


  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8 text-center h-svh overflow-auto">
      <div className="flex justify-between items-center w-full">
        { !onboarding && (
          <Link href="/">
            <Image src={logo} alt="logo" width={50} height={50} className="bg-[#ffd70070] p-2 rounded-full" />
          </Link>
          )}
        <Title />
       { !onboarding &&  <div className="rounded-full border p-2">profile</div>}
      </div>

      {
        onboarding ? (
          <WelcomActions setOnboarding={setOnboarding} />
        ) : (
          <div className="grid grid-cols-12 gap-2 w-full relative">
            <StatusGame status={status} />
            <div className="col-span-full lg:col-span-9 w-full h-full">
              <GameCards cards={cards} setCards={setCards} setStatus={setStatus} status={status} shuffoldCards={shuffoldCards} />
            </div>
            <div className="transform transition duration-500 ease-in-out absolute -right-80 lg:relative lg:right-0 w-60 bg-red-500 h-[70vh]">chat</div>
          </div>
        )
      }
    </main>
  );
}
