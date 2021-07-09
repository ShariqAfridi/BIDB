import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useState} from 'react';
import axios from "axios";
import '../css/login.css';
import {IonGrid, IonRow, IonCol} from '@ionic/react';
import {useHistory} from "react-router-dom";
import {IonItem, IonLabel, IonInput, IonButton, IonAlert, IonItemDivider} from '@ionic/react';
// import { personCircle } from "ionicons/icons";
// import ReactDOM from 'react-dom';
// import {  IonIcon } from '@ionic/react';

import SignInWithGoogle from "../components/LoginWithGoogle/loginWithGoogle"

function validateEmail(email: string) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
}

const Login: React.FC = () => {

    const history = useHistory();
    const [email, setEmail] = useState<string>("eve.holt@reqres.in");
    const [password, setPassword] = useState<string>("cityslicka");
    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const handleLogin = () => {
        if (!email) {
            setMessage("Please enter a valid email");
            setIserror(true);
            return;
        }
        if (validateEmail(email) === false) {
            setMessage("Your email is invalid");
            setIserror(true);
            return;
        }

        if (!password || password.length < 6) {
            setMessage("Please enter your password");
            setIserror(true);
            return;
        }

        if (!password || password.length < 6) {
            setMessage("Please enter your password");
            setIserror(true);
            return;
        }

        const loginData = {
            "email": email,
            "password": password
        }

        const api = axios.create({
            //   Using Reqres Rest api for testing reasons
            // Replace this with main api
            baseURL: `https://reqres.in/api`
        })
        api.post("/login", loginData)
            .then(res => {
                history.push("/dashboard/" + email);
            })
            .catch(error => {
                setMessage("Auth failure! Please create an account");
                setIserror(true)
            })
    };


    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent fullscreen className="ion-padding ion-text-center main-view">
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol class="vertical-align">
                            <div className="login-main-view">
                                <IonRow>
                                    <IonCol>
                                        <IonAlert
                                            isOpen={iserror}
                                            onDidDismiss={() => setIserror(false)}
                                            cssClass="my-custom-class"
                                            header={"Error!"}
                                            message={message}
                                            buttons={["Dismiss"]}
                                        />
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                    </IonCol>
                                </IonRow>
                                <IonRow style={{backgroundColor: "red"}}>
                                    {/*-- Header without a border --*/}
                                    <IonHeader className="ion-no-border ion-text-left ">
                                        <IonToolbar className="remove-white-background">
                                            <IonTitle className="login-view-title">Login</IonTitle>
                                        </IonToolbar>
                                    </IonHeader>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="input-fields-col">
                                        <div className="form-group">
                                            <label className="form-group-input-text-title">Email</label>
                                            <IonInput
                                                type="email"
                                                value={email}
                                                onIonChange={(e) => setEmail(e.detail.value!)} className="form-control input-lg form-group-input-text"
                                            >
                                            </IonInput>
                                        </div>

                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="input-fields-col">
                                        <div className="form-group">
                                            <label className="form-group-input-text-title">Password</label>
                                            <IonInput
                                                type="password"
                                                value={password}
                                                onIonChange={(e) => setPassword(e.detail.value!)} className="form-control input-lg form-group-input-text"
                                            >
                                            </IonInput>
                                        </div>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonTitle style={{paddingBottom: " 1.5rem"}}>
                                            <a href="#" className="forgot-password-text">Forgot Password?</a>
                                        </IonTitle>
                                        <IonButton  expand="block"  onClick={handleLogin} className="login-button">Login</IonButton>

                                        <IonRow className="item-divider-login">
                                            <IonCol>
                                                <IonItemDivider className="remove-white-background" />
                                            </IonCol>
                                            <IonCol size="auto">
                                                <p className="item-divider-text"> or</p>
                                            </IonCol>
                                            <IonCol>
                                                <IonItemDivider className="remove-white-background"/>
                                            </IonCol>
                                        </IonRow>
                                        <div>
                                            <SignInWithGoogle></SignInWithGoogle>
                                        </div>
                                    </IonCol>
                                </IonRow>
                                <IonRow></IonRow>
                            </div>
                        </IonCol>
                        <IonCol> </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;