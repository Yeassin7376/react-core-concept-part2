import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]= useState(0)

    const handelSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns)
    }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            {
                runs > 50 && <p>You Score: 50 </p>
            }
            <h2>Score: {runs}</h2>

            <button onClick={handelSingle}>Single</button>
            <button>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}