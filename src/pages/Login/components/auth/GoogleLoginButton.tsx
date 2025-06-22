import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useAuthContext } from "../../../../global-state/context/auth/authContext";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  name: string;
  email: string;
  picture: string;
};


const GoogleLoginButton = () => {
  const { dispatch } = useAuthContext();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse: CredentialResponse) => {
        const token = credentialResponse.credential;
        if(!token) return
        const decoded = jwtDecode<DecodedToken>(token);

        dispatch({ type: "LOGIN", payload: {
            token,
            user: {
                name: decoded.name,
                email: decoded.email,
                avatar: decoded.picture
            }
        } });
        localStorage.setItem("auth", JSON.stringify({
            token,
            user: {
                name: decoded.name,
                email: decoded.email,
                avatar: decoded.picture
            }
        }));
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
