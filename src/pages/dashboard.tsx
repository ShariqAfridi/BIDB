import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider} from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

import ToolBar from "../components/ToolBar/toolbar.js";
// import SideDrawer from "../components/HamburgerMenu/sideDrawer";
// import BackDrop from "../components/BackDrop/backDrop";

interface ResetProps  extends RouteComponentProps<{id: string;}> {}

  const Dashboard: React.FC<ResetProps> = ({ match }) => {
    
    const history = useHistory();
    
  const [users, setUsers] = useState<Array<any>>([]);
    useEffect(() => {
  
      const api = Axios.create({
        //   Using Reqres Rest api for testing reasons
        // Replace this with main api
        baseURL: `https://reqres.in/api`
        // baseURL: `https://tbd.com/api`
    })
    api.get("/users")
        .then(res => {             
            setUsers(res.data.data)
        })
        .catch(error=>{
            console.log("Error fetching data")
        })
    }, [])
    
  return (
    <IonPage>
       <div style={{ height: '100%'}}>
          <IonHeader>
          <IonToolbar>
          {/* <IonTitle>Dasboard</IonTitle>
          <h4>Welcome: {match.params.id}</h4> */}
          <ToolBar  />
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
              <IonCol>
                  <h4>Welcome: {match.params.id}</h4>
                  <IonItemDivider></IonItemDivider> 
              </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {users.map((user, i) => {
                return (
                  <IonItem key={i}>
                    <IonAvatar>
                        <img src={user.avatar} />
                    </IonAvatar>
                    <IonLabel>
                        <h2 style={{ paddingLeft: "10px" }}>{user.first_name + " " + user.last_name} </h2>
                        <p style={{ paddingLeft: "10px" }}>{user.email}</p>
                    </IonLabel>
                  </IonItem>
                );
              })} 
            </IonCol>
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