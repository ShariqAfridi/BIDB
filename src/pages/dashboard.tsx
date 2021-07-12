import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {useHistory, RouteComponentProps} from "react-router-dom";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonInput, IonButton} from '@ionic/react';
import {IonGrid, IonRow, IonCol} from '@ionic/react';
import {IonItem, IonLabel, IonAvatar} from '@ionic/react';
import {render} from 'react-dom'
import {LogoNodejs} from 'react-ionicons'
import '../css/dashboard.css';
import MONITOR from "../assets/monitor.png";
import CANCEL from "../assets/close.png";
import USER from "../assets/user.png";
import CHECK from "../assets/check.png";


import ToolBar from "../components/ToolBar/toolbar.js";
// import SideDrawer from "../components/HamburgerMenu/sideDrawer";
// import BackDrop from "../components/BackDrop/backDrop";

interface ResetProps extends RouteComponentProps<{ id: string; }> {
}

const Dashboard: React.FC<ResetProps> = ({match}) => {

    const history = useHistory();

    const [users, setUsers] = useState<Array<any>>([]);
    useEffect(() => {

        //   const api = Axios.create({
        //     //   Using Reqres Rest api for testing reasons
        //     // Replace this with main api
        //     baseURL: `http://vnrc219584.execute-api.us-west-2.amazonaws.com/Stage`
        //     // baseURL: `https://tbd.com/api`
        // })
        // api.get("/users", {headers: {"Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 'Content-Type': 'application/json'}})
        //     .then(res => {
        //         console.log("+++++++++++ users ++++++++++", res)
        //         setUsers(res.data.data)
        //     })
        //     .catch(error=>{
        //         console.log("Error fetching data")
        //     })
    }, [])

    return (
        <IonPage>
            <div style={{height: '100%'}}>
                <IonHeader>
                    <IonToolbar className="toolbar-header">
                        {/* <IonTitle>Dasboard</IonTitle>
          <h4>Welcome: {match.params.id}</h4> */}
                        <ToolBar/>

                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding ion-text-center">
                    <IonGrid>
                        <IonRow>
                            <IonCol className="input-fields-col ">
                                <div className="form-group main-column">
                                    <label className="form-group-input-text-title">Search</label>
                                    <IonInput
                                        type="text"
                                        className="form-control input-lg form-group-input-text margin-remover"
                                        placeholder="Search worker name, company, location"
                                    >
                                    </IonInput>
                                </div>
                            </IonCol>
                            <IonCol className="input-fields-col ">
                                <div className="form-group sub-column">
                                    <label className="form-group-input-text-title">Date</label>
                                    <IonInput
                                        type="date"
                                        className="form-control input-lg form-group-input-text margin-remover"
                                    >
                                    </IonInput>
                                </div>
                            </IonCol>
                            <IonCol className="input-fields-col remove-paddin">
                                <IonButton expand="block" className="search-button">TODAY’s SCHEDULE</IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                {users.map((user, i) => {
                                    return (
                                        <IonItem key={i}>
                                            <IonAvatar>
                                                <img src={user.avatar}/>
                                            </IonAvatar>
                                            <IonLabel>
                                                <h2 style={{paddingLeft: "10px"}}>{user.first_name + " " + user.last_name} </h2>
                                                <p style={{paddingLeft: "10px"}}>{user.email}</p>
                                            </IonLabel>
                                        </IonItem>
                                    );
                                })}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div className="filter-text main-filter-alignment">
                                    Type
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper header-search-remove-margin">
                                    <label className="filter-text">Date</label>
                                    <div className="filter-text-icons">
                                        <div className="filter-text-icons">
                                            <button className="icon-button">▲</button>
                                            <button className="icon-button">▼</button>
                                        </div>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper header-search-remove-margin">
                                    <label className="filter-text">Time</label>
                                    <div className="filter-text-icons">
                                        <button className="icon-button">▲</button>
                                        <button className="icon-button">▼</button>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper header-search-remove-margin">
                                    <label className="filter-text">Status</label>
                                    <div className="filter-text-icons">
                                        <button className="icon-button">▲</button>
                                        <button className="icon-button">▼</button>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper header-search-remove-margin">
                                    <label className="filter-text">Worker name</label>
                                    <div className="filter-text-icons">
                                        <button className="icon-button-selected">▲</button>
                                        <button className="icon-button">▼</button>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper header-search-remove-margin">
                                    <label className="filter-text">Company</label>
                                    <div className="filter-text-icons">
                                        <button className="icon-button">▲</button>
                                        <button className="icon-button-selected">▼</button>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="filter-text">Location</label>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="separate-line">
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div className="type-item-t1">
                                    <label className="type-item-inner-text-color1">E</label>
                                    <label className="type-item-innor-icon">!</label>
                                </div>
                                <div className="row-data-text main-filter-alignment type-item-right-icon">
                                    <img className="row-data-icons" src={MONITOR} alt="logo"/>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">06/01/2021</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">11:30 am</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="close-button">
                                        <img className="close-button-inner" src={CANCEL} alt="logo"/>
                                    </label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">Ahmad George</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">Facebook</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">https://bluejeans.com/664977498
                                        pw: 1234 worker in Seattle</label>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="separate-table-rows">
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div className="type-colum-dt">
                                    <div className="type-item-2">
                                        <label className="type-item-inner-text-color">RCAC</label>
                                        <label className="type-item-innor-icon">!</label>
                                    </div>
                                    <div className="row-data-text main-filter-alignment type-item-right-icon">
                                        <img className="row-data-icons" src={USER} alt="logo"/>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">06/01/2021</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">11:30 am</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="tick-button">
                            <span className="checkmark">
                                    <div className="checkmark_stem"></div>
                                    <div className="checkmark_kick"></div>
                                </span>
                                    </label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">Ahmad George</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">Facebook</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">https://bluejeans.com/664977498
                                        pw: 1234 worker in Seattle</label>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="separate-table-rows">
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div className="type-colum-dt">
                                    <div className="type-item-3">
                                        <label className="type-item-inner-text-color">SWWC</label>
                                        <label className="type-item-innor-icon">!</label>
                                    </div>
                                    <div className="row-data-text main-filter-alignment type-item-right-icon">
                                        <img className="row-data-icons" src={USER} alt="logo"/>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">06/01/2021</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">11:30 am</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="tick-button">
                            <span className="checkmark">
    <div className="checkmark_stem"></div>
    <div className="checkmark_kick"></div>
</span>
                                    </label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">Ahmad George</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">Facebook</label>

                                </div>
                            </IonCol>
                            <IonCol>
                                <div className="filter-text-wrapper">
                                    <label className="row-data-text">https://bluejeans.com/664977498
                                        pw: 1234 worker in Seattle</label>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="separate-table-rows">
                        </IonRow>
                    </IonGrid>
                </IonContent>
                {/* <IonContent>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </IonContent> */}
            </div>
        </IonPage>
    );
};

export default Dashboard;