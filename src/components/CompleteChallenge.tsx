import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import styles from "../styles/components/CompleteChallenge.module.css";

export function CompleteChallenge() {
    const {challengesCompleted} = useContext(ChallengesContext);
    
    return(
        <div className={styles.CompleteChallengeContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}