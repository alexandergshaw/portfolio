import React from "react"
import styles from './terminal.module.scss'


export interface TerminalProps {

}

export const Terminal = (props: TerminalProps) => {
    return (
        <div className={`${styles["screen"]}`}>
            <div className={styles["scan-line"]}>
            </div>
        </div>

    )
}