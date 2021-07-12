import React, {Component} from "react";
import { GoogleLogin } from "react-google-login";
import "./loginWithGoogle.css";
import { useHistory} from "react-router-dom";

function GoogleWithLogin() {
    let history  = useHistory();
    let responseGoogleSuccess = (response) => {
    console.log(response);
    console.log(response.profileObj);
    if (response.profileObj.email) {
        history.push("/dashboard/" + response.profileObj.email);
        }
    };

    let responseGoogleError = (response) => {
        console.log("Error login");
    };

    return (
        <div>
            <GoogleLogin
                clientId="493315368648-9oitntud2t7qg0isbl57q96mqulgt5o7.apps.googleusercontent.com"
                // clientId="493315368648-9oitntud2t7qg0isbl57q96mqulgt5o7.apps.googleusercontent.com"
                className="btn-google-login"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleError}
                cookiePolicy={"single_host_origin"}
            />

        </div>
        // document.getElementById("googleButton")
    );
}
export default GoogleWithLogin