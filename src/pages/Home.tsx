import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonText, IonButton,IonRow,IonCol } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import ExploreContainer from '../components/ExploreContainer/ExploreContainer';
import Login from './login';

import '../css/Home.css';

const Home: React.FC = () => {
  return (
   <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Balance Imgae Landing Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <IonRow>
          <IonCol>
            <IonButton href="/login" mode='ios'>Login</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
 
export default Home;
