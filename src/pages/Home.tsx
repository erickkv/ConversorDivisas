import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [montoDolares, setMontoDolares] = useState<number>(0);
  const [montoQuetzales, setMontoQuetzales] = useState<number>(0);

  const convertirQuetzales = () => {
    const tasaCambio = 8;
    const resultado = montoQuetzales / tasaCambio;
    setMontoDolares(resultado);
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Convertidor de Divisas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          type="number"
          placeholder="Monto en Quetzales"
          value={montoQuetzales}
          onIonChange={(e) => setMontoQuetzales(parseFloat((e.detail.value!)))}
        ></IonInput>
        <IonButton expand="full" onClick={convertirQuetzales}>
          Convertir
        </IonButton>
        <p>Resultado: {montoDolares} dólares </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
