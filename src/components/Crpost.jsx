import { useContext, useRef, useState } from "react";
import { FeedList } from "../store/AppData";

const Crpost = () => {
    const [file, setFile] = useState();
    function handleChange(e) {    
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const { addPost } = useContext(FeedList);

    const userIdElement = useRef();
    const locaElement = useRef();    
    const captionElement = useRef();

    const handleSubmit = (event) => {
        alert("Post uploaded")
        event.preventDefault();
        const userId = userIdElement.current.value;
        const loca = locaElement.current.value;       
        const caption = captionElement.current.value;
        // const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        locaElement.current.value = "";
        setFile();
        captionElement.current.value = "";
        //tagsElement.current.value = "";

        addPost(userId, loca, file, caption);
    };

    return (
        <div className="form text-white bg-black rounded p-4     mx-auto">
            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit} className="">
                <div className="mb-3"> 
                    <label className="form-label">Enter User ID</label>
                    <input type="text" ref={userIdElement} id="100"  className="form-control bg-dark border-warning text-white" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Location</label>
                    <input type="text" ref={locaElement} id="200" className="form-control bg-dark border-warning text-white" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Upload Image</label>
                    <input type="file" onChange={handleChange} />
                    <img src={file} height={300} width={400} className="bg-dark border-black text-white"/>
                </div>
                <div className="mb-3">
                    <label className="form-label ">Enter Caption</label>
                    <input type="text" ref={captionElement} id="400" className="form-control bg-dark border-warning text-white" />
                </div>
                <button type="submit" className="btn btn-warning px-4">Post</button>
            </form>
        </div>
    )
}

export default Crpost
