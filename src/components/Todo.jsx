import { RiDeleteBin5Fill } from "react-icons/ri";
const Todo = (props) => {
    return (
        <>
            {props.msg}
            {props.list.map((i) => (
                <>
                    <li key={i} className="list-group-item border border-info rounded m-1 p-3">
                        <span>{i}</span>
                        <button className="btn btn-danger float-end " onClick={()=>{props.click(i)}}><RiDeleteBin5Fill /></button>
                    </li>
                </>   
            ))}  
        </>
    )  
}

export default Todo
