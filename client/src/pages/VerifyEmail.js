import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("Verifying...");
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auth/verify-email/${token}`);
        setMessage(res.data.message);
        setVerified(true);
      } catch (err) {
        setMessage("Verification failed or link is invalid.");
        setVerified(false);
      }
    };
    verify();
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{message}</h2>
      {verified && <p>You can now log in.</p>}
    </div>
  );
};

export default VerifyEmail;
