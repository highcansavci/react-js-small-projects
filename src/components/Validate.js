import {useState} from "react";
import "../static/validate.css"

function Validate() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

    const [usernameColor, setUsernameColor] = useState("")
    const [emailColor, setEmailColor] = useState("")
    const [passwordColor, setPasswordColor] = useState("")
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("")

    function validate(e) {
        e.preventDefault();
        if(username.length > 8) {
           setErrorUsername("")
           setUsernameColor("green")
        } else {
            setErrorUsername("Username must be at least 8 letters long.")
            setUsernameColor("red")
        }

        if(email.includes("@")) {
            setErrorEmail("")
            setEmailColor("green")
        } else {
            setErrorEmail("Invalid email, it should include @.")
            setEmailColor("red")
        }

        if(password.length > 8) {
            setErrorPassword("")
            setPasswordColor("green")
        } else {
            setErrorPassword("Password must be at least 8 characters long.")
            setPasswordColor("red")
        }

        if(password !== "" && password === confirmPassword) {
            setErrorConfirmPassword("")
            setConfirmPasswordColor("green")
        } else {
            setErrorConfirmPassword("Passwords should match.")
            setConfirmPasswordColor("red")
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-image">
                </div>
                <form>
                    <input type="text" placeholder={"Name"} style={{borderColor: usernameColor}} value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <p className="error">{errorUsername}</p>
                    <input type="email" placeholder={"Email"} style={{borderColor: emailColor}} value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <p className="error">{errorEmail}</p>
                    <input type="password" placeholder={"Password"} style={{borderColor: passwordColor}} value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <p className="error">{errorPassword}</p>
                    <input type="password" placeholder={"Confirm Password"} style={{borderColor: confirmPasswordColor}} value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <p className="error">{errorConfirmPassword}</p>
                    <button className={"submit-button"} onClick={e => validate(e)}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Validate;