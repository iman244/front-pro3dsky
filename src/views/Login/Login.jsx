import "./login.css";
import React, { useEffect, useState } from "react";
import { LoginFormElements } from "./LoginData";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (event) => {
        const { value } = event.target;
        const { name } = event.target.dataset;
        if (name === "inputEmail" && !isValidEmail(value) && value) {
            setErrorEmail("email is invalid");
        } else if (name === "inputEmail" || !email) {
            setErrorEmail(null);
        }

        switch (name) {
            case "inputEmail":
                setEmail(value);
                break;
            case "inputPassword":
                setPassword(value);
        }
    };

    useEffect(() => {
        console.log({ email, password });
    });

    return (
        <div className="page page-login page-center">
            <h1>pro3dsky</h1>
            <div className="wrapper-form">
                <form>
                    <h2>sign in</h2>
                    <div className="wrapper-inputs">
                        {LoginFormElements.map((element) => (
                            <div key={element.id}>
                                <input
                                    id={element.id}
                                    name={element.name}
                                    data-name={element.name}
                                    type={element.type}
                                    className="form-control"
                                    onChange={handleChange}
                                />
                                <label htmlFor={element.name}>
                                    {element.label}
                                </label>
                                {element.errorField && (
                                    <div className="error">{errorEmail}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="wrapper-submit-button">
                        <button
                            className="submit-button"
                            disabled={errorEmail || !email}
                        >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
