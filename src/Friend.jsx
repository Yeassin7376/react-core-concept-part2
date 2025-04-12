export default function Friend({friend}){
    console.log(friend)
    const {name, email, phone} = friend;
    return (
        <div className="CardBorder">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}