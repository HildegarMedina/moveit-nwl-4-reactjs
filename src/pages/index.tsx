import Head from "next/head";
import { Countdown } from "../components/Countdown";
import { CompleteChallenge } from "../components/CompleteChallenge";
import { ExperienceBars } from "../components/ExperiencieBars";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBars/>
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
    </div>
  )
}