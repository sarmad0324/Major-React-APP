
import { useRef } from "react";

const Form = () => {
    const name=useRef()
    const mail=useRef()
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const n=name.current.value;
        const m=mail.current.value;
        console.log(`${n} and mail is : ${m}`)
        alert("Account created!");
    };
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Sign Up</h2>
                <div className="Field">
                    <label>
                        Name <sup>*</sup>
                    </label>
                    <input
                        ref={name}
                        placeholder="Name"
                    />
                </div>
                
                <div className="Field">
                    <label>
                        Email address <sup>*</sup>
                    </label>
                    <input
                        ref={mail}
                        placeholder="Email address"
                    />
                </div>
                <button type="submit" >
                    Create account
                </button>
            </fieldset>
        </form>
    )
}

export default Form
