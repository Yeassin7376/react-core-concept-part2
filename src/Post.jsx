export default function Post({post}){
    
    const {title, body} = post;
    return (
        <div className="CardBorder">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}