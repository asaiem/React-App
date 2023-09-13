import { useState } from "react";

export default function ScoreKeeper({ num = 5, target = 6 }) {
    const [scores, setScores] = useState(new Array(num).fill(0))



    return (
        <>
            <h1>ScoreKeeper</h1>
            <ul>
                {scores.map((score, i) => {
                    return (
                        <>
                            <li>Player{i + 1}: {score}</li>
                            <button> +1 </button>
                        </>

                    )

                })}
            </ul>



        </>
    )
}