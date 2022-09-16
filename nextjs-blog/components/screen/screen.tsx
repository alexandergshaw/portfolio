import React from "react"
import styles from './screen.module.scss'


export interface ScreenProps {
    children?: any
}

export const Screen = (props: ScreenProps) => {
    return (
        <div className={`${styles["screen"]}`}>
            <div className={styles["screen__scan-line"]}>
            </div>
            {props.children}
        </div>
    )
}