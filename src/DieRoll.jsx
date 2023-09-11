export default function DieRoll({NumSides =14}){
    const rand = Math.floor(Math.random()* NumSides) +1
    return <p> {NumSides} - Die Roll: {rand} </p>
}