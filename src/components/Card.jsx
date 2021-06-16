import React from 'react'
import './Card.css'
import { IonCard, IonCardHeader, IonCardTitle, IonRow, IonCardContent, IonImg } from '@ionic/react';
const Card = (props) => {
    const {name, time, img} = props;

    return (
        <IonCard>
        <IonCardHeader>
          <IonCardTitle className="card-title">{name}</IonCardTitle>
        </IonCardHeader>
        <IonRow>
          <IonCardContent>
            <IonImg src={img}/>
          </IonCardContent>
          <IonCardContent className="card-text">
            <p>Длительность консультации</p>
            <span>{time} минут</span>
          </IonCardContent>
        </IonRow>
      </IonCard>
      )
}

export default Card
