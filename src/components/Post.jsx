import { useState } from "react";
const Post = ({ post }) => {
    // State to store count value
const [count, setCount] = useState(0);
const incrementCount = () => {
    
    setCount(count + 1);
  };
   
    return (
        <>
            <div className="card post bg-black text-white">
                <div className="card-body">
                    <h4 className="card-title">{post.userId}</h4>
                    <h6 className="fs-6 fw-light text-white-50 mb-0">{post.location}</h6>
                </div>
                <hr className="bg-white m-0 fw-bold"/>
                <img src={post.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{post.caption}</p>
                    <button className="btn btn-danger position-relative m-1 " onClick={incrementCount}>
                    Like
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
                        {count}
                    </span>
                </button>
                </div>
               
            </div>
        </>
    )
}

export default Post
