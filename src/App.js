import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './components/Card'
import 'swiper/swiper.scss';
import './App.scss'
import { Route, Redirect, Switch, useHistory } from 'react-router-dom'
import Psychologist from './pages/Psychologist'
import PsychologistElena from './pages/Psychologist-elena'
import { useDispatch, useSelector } from 'react-redux';
import { sendDate, sendMonth, sendPsycholog, sendTime } from './store/actions';
import { IonCard, IonCardHeader, IonButton, IonCardContent } from '@ionic/react';
import { useEffect } from 'react';
import firebase from './firebase';
function App() {

  useEffect(() => {
    firebase.firestore().collection('pshycholog').onSnapshot((snapshot) => {
      const newPshycholog = snapshot.docs.map((doc) => ({
        ...doc.data()
      }))
      console.log()
      dispatch(sendDate(newPshycholog[newPshycholog.length-1].date))
      dispatch(sendMonth(newPshycholog[newPshycholog.length-1].month))
      dispatch(sendTime(newPshycholog[newPshycholog.length-1].time))
      dispatch(sendPsycholog(newPshycholog[newPshycholog.length-1].psycholog))
    })
  }, [])
  const date = useSelector(state => state.date);
  const month = useSelector(state => state.month);
  const time = useSelector(state => state.time);
  const psycholog = useSelector(state => state.psycholog);
  const dispatch = useDispatch();
  const history = useHistory();

  const sendFirestore = (e) => {
    e.preventDefault()
    firebase.firestore().collection('pshycholog').add({
      date: parseInt(date),
      psycholog: parseInt(+psycholog),
      month,
      time
  })
  }
  return (
    <>
        <Swiper
          onSlideChange={(swiper) => {
            dispatch(sendPsycholog(swiper.activeIndex));
            history.push(`/psychologist-${swiper.activeIndex}`)
          }} 
          slidesPerView={1}
        >
          <SwiperSlide>
            <Card name="Имя" time={50} img="./assets/avatar/man.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Елена Шимановская" time={50} img="./assets/avatar/woman.png"/>
          </SwiperSlide>
        </Swiper>
        <Switch>
          <Route exact path="/psychologist-0">
            <Psychologist/>
          </Route>
          <Route exact path="/psychologist-1">
            <PsychologistElena/>
          </Route>
          <Route exact path="/">
              <Redirect to="/psychologist-0" />
          </Route>
        </Switch>

        <IonCard>
          <IonCardHeader className="information">
              <div className="information-date">
                  <h1>
                      Дата
                  </h1>
                  <p>{date} {month}</p>
              </div>
              <div className="hr"/>
              <div className="information-date">
                  <h1>
                    Время
                  </h1>
                  <p>{time}</p>
              </div>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={sendFirestore}>
              ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
            </IonButton>
          </IonCardContent>
        </IonCard>
    </>
  );
}

export default App;
