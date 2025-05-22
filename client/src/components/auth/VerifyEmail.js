import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
    const { token } = useParams();
    const history = useHistory();

    useEffect(() => {
        const verify = async () => {
            try {
                await axios.post("http://localhost:5000/api/verify-email", { token });
                alert("Email verified successfully!");
                history.push("/mentee"); // or wherever you want to redirect
            } catch (err) {
                alert("Invalid or expired verification link.");
            }
        };
        verify();
    }, [token, history]);

    return <h2>Verifying your email...</h2>;
};

export default VerifyEmail;
