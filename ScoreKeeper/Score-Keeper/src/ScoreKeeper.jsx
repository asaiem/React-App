import { useState } from "react";

export default function ScoreKeeper({ num = 5, target = 6 }) {
    const [scores, setScores] = useState(new Array(num).fill(0))
    
    //Normal Way
    function increaseScore(i) {
        setScores(() => {
            const copy = [...scores]
            copy[i] += 1;
            return copy
        })

    }

    //Reacty Way
    function increaseScore(i) {
        setScores(() => {
            scores.map((score,idx)=>{
                if (i===idx){
                    return score +=1;
                }
                //if not
                return score    
            })
            const copy = [...scores]
            copy[i] += 1;
            return copy
        })

    }


    return (
        <>
            <h1>ScoreKeeper</h1>
            <ul>
                {scores.map((score, i) => {
                    return (
                        <>
                            <li>Player{i + 1}: {score}</li>
                            <button  onClick={()=>increaseScore(i)}> +1 </button>
                        </>

                    )

                })}
            </ul>



        </>
    )
}