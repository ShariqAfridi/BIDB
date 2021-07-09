
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import "./loginWithGoogle.css";

export class GoogleWithLogin extends Component {
     history  = this.props;
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
      return <Redirect to="/login" />;
  };
  render () {
    return (
      <div>
        <GoogleLogin
          clientId="493315368648-9oitntud2t7qg0isbl57q96mqulgt5o7.apps.googleusercontent.com"
          // clientId="493315368648-9oitntud2t7qg0isbl57q96mqulgt5o7.apps.googleusercontent.com"
          className="btn-google-login"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />

      </div>
      // document.getElementById("googleButton")
    );
  }
}
export default GoogleWithLogin