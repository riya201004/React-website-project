function Card(props)
{
    return(
        <div className={`card ${props.className}`}>
            <h2>{props.heading}</h2>
            <h3>{props.content}</h3>
            {props.image && <img src={props.image} alt={props.heading} className="card-image" />}
        </div>
    );
};

export default Card;