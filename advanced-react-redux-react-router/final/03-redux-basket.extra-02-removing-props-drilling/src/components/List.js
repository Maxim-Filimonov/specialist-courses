import './List.css';

export default function (props){
    return <ul>
        {props.items.map( (e, i) => (
            <li key={i}>{e}</li>
        ) )}
    </ul>
}