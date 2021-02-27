import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/hildegarMedina.png" alt="Hildegar Medina"/>
            <div>
                <strong>Hildegar Medina</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}