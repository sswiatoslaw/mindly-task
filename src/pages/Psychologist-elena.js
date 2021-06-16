import React from 'react'
import Calendar from '../components/Calendar/Calendar'
const Psychologist = () => {
    const object = [
        {
            date: 16,
            day: 'Пн',
            month: "Июня",
        },
        {
            date: 17,
            day: 'Вт',
            month: "Июня",
        },
        {
            date: 18,
            day: 'Ср',
            month: "Июня",
        },
        {
            date: 19,
            day: 'Чт',
            month: "Июня",
        },
        {
            date: 20,
            day: 'Пт',
            month: "Июня",
        },
        {
            date: 21,
            day: 'Сб',
            month: "Июня",
        },
        {
            date: 22,
            day: 'Нд',
            month: "Июня",
        }
    ]
    return (
        <div className="calendar">
            <Calendar
            time={["18:00", "18:30", "19:00", "19:30", "19:45", "20:45", "21:15"]}
            listFreeDays={object}
            />
        </div>
    )
}

export default Psychologist
