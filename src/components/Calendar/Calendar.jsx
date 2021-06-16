import React from 'react'
import './Calendar.scss'
import { IonCard, IonIcon, IonCardHeader, IonCardContent } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import { sendDate, sendMonth, sendTime } from '../../store/actions';
import { useDispatch } from 'react-redux';
const Calendar: React.FC = (props) => {
    const {time, listFreeDays} = props;

    const dispatch = useDispatch();
    return (
        <div className="calendar-block" slot="fixed">
            <div className="calendar-block__text">
                <p>Возможноная дата</p>
                <div className="calendar-block__icon">
                    <IonIcon src="./assets/icon/barcode-outline.svg" className="active"></IonIcon>
                    <IonIcon src="./assets/icon/calendar-number-outline.svg"></IonIcon>
                </div>
            </div>
            <Swiper 
                slidesPerView={2}
                onSlideChange={(swiper) => {
                    dispatch(sendDate(listFreeDays[swiper.activeIndex].date))
                    dispatch(sendMonth(listFreeDays[swiper.activeIndex].month))
                }}
            >
                    {
                        listFreeDays.map((item) => 
                            (
                            <SwiperSlide>
                                <IonCard>
                                    <IonCardContent>
                                        <p className="calendar-text__swiper">{item.day}</p>
                                        <h5 className="calendar-date__swiper">{item.date}</h5>
                                    </IonCardContent>
                                </IonCard>
                            </SwiperSlide>
                            )
                        )
                    }
            </Swiper>
            <Swiper
                className="calendar-time"
                slidesPerView={3}
                onSlideChange={swiper => {
                    dispatch(sendTime(time[swiper.activeIndex]))
                }}
            >
            {
                time.map(obj => (
                    <SwiperSlide>
                        <h1>{obj}</h1>
                    </SwiperSlide>
                    )
                )
            }
            </Swiper>
        </div>
    )
}

export default Calendar
