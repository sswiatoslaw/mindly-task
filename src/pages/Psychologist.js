import React from 'react'
import Calendar from '../components/Calendar/Calendar'
const Psychologist = () => {
    const object = [
        {
            date: 16,
            day: 'Пн',
            month: "Мая",
        },
        {
            date: 17,
            day: 'Вт',
            month: "Мая",
        },
        {
            date: 18,
            day: 'Ср',
            month: "Мая",
        },
        {
            date: 19,
            day: 'Чт',
            month: "Мая",
        },
        {
            date: 20,
            day: 'Пт',
            month: "Мая",
        },
        {
            date: 21,
            day: 'Сб',
            month: "Мая",
        },
        {
            date: 22,
            day: 'Нд',
            month: "Мая",
        }
    ]
    return (
        <div className="calendar">
            <Calendar
                time={["09:00", "12:30", "13:00", "15:30", "15:45", "17:45", "18:15"]}
                listFreeDays={object}
            />
        </div>
    )
}

export default Psychologist
