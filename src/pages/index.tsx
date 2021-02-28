import Head from "next/head";
import { GetServerSideProps } from "next";
import { Countdown } from "../components/Countdown";
import { CompleteChallenge } from "../components/CompleteChallenge";
import { ExperienceBars } from "../components/ExperiencieBars";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdowContexts";
import { ChallengesProvider } from "../contexts/ChallengeContexts";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengeCompletes: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengeCompletes={props.challengeCompletes}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>
        <ExperienceBars/>
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompleteChallenge/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challengeCompletes} = ctx.req.cookies; 

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompletes: Number(challengeCompletes)
    }
  }
}