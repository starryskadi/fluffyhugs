import Head from "next/head";
import { Inter } from "next/font/google";
import Characters from "@src/components/Characters/Characters";
import Loading from "@src/components/Loading/Loading";
import MainCharacter from "@src/components/MainCharacter/MainCharacter";
import Background from "@src/components/Background/Background";
import CharacterAnimationIdle from "@src/components/CharacterAnimationIdle/CharacterAnimationIdle";
import PageScroll from "@src/components/PageScroll/PageScroll";
import JumpyText from "@src/components/JumpyText/JumpyText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageScroll>
          <section className="w-full h-screen bg-secondary ">
            <Background></Background>
            <Characters></Characters>
          </section>

          <section className="w-full h-screen bg-secondary">
            <div className="container mx-auto flex items-center justify-center h-full max-w-[800px] px-4 relative z-10">
              <img src="/assets/logo.webp" alt="logo" />
            </div>
          </section>
          <section className="w-full h-screen bg-secondary flex items-center justify-center">
            <div className="px-4">
              <JumpyText text="Welcome to Fluffy Hugs"></JumpyText>
            </div>
          </section>
        </PageScroll>

        <Loading></Loading>
      </main>
    </>
  );
}
