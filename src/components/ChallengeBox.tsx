import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import { CountdownContext } from "../contexts/CountdowContexts";
import style from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded () {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed () {
        resetChallenge();
        resetCountdown();
    }

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
                            onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button
                            type="button"
                            className={style.ChallengeSucceededButton}
                            onClick={handleChallengeSucceeded}
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