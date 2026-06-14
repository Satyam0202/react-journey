import "./card.css"
function Card()
{
    const fname="Satyam"
    const lname="Singh"
    const college="Chandigarh University"
    const branch="MCA"
    const dob=18/12/2001
    const age=21
    return(
        <div className="student">
            <p>Name : {fname+"  "+lname}</p>
            <p>College: {college}</p>
            <p>Branch : {branch}</p>
            <p>DOB : {dob}</p>
            <p>Age: {age}</p>
        </div>
    )
}
export default Card