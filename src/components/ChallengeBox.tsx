import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import style from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

    return(
        <div className={style.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={style.challengeFailedButton}
                            onClick={resetChallenge}
                        >Falhei</button>
                        <button
                            type="button"
                            className={style.ChallengeSucceededButton}
                        >Completei</button>
                    </footer>
                </div>
            ): (
                <div className={style.ChallengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p className={style.challengeNotActivep}>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    );
}