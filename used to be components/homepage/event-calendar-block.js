import * as React from 'react'

const EventCalendarBlock = ({events}) => {
    let style = {
        backgroundImage: "url(/img/7449.jpg)"
        //backgroundColor: "red"
    }

    return (
        <div className="event-calendar-block">
            <div className="event-hero-section" style={style}>
                <div className="side-section">
                    <div className="news-data">
                        <h1 className="news-title">Событие</h1>
                        <p className="news-description">Описание события</p>
                    </div>
                    <div className="news-bottom-block">
                        <span className="news-date">26.10.2021</span>
                        <a className="news-link button-see-more">Подробнее</a>
                    </div>
                </div>
            </div>
            <div className="events-section">
                <span className='calendar-month'>Месяц 2021</span>
                <div className="calendar-event">
                    <div className='event-date'>
                        <span className='event-date-day'>20</span>
                        <span className='event-date-month'>ноября</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>Событие</h2>
                        <span className='event-description'>Описание события или дополнительная информация</span>
                        <span className='event-hashtag'>#ДисСовет</span>
                    </div>
                </div>
                <div className="calendar-event">
                    <div className='event-date'>
                        <span className='event-date-day'>20</span>
                        <span className='event-date-month'>ноября</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>Событие</h2>
                        <span className='event-description'>Описание события или дополнительная информация</span>
                        <span className='event-hashtag'>#ДисСовет</span>
                    </div>
                </div>
                <div className="calendar-event">
                    <div className='event-date'>
                        <span className='event-date-day'>20</span>
                        <span className='event-date-month'>ноября</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>Событие</h2>
                        <span className='event-description'>Описание события или дополнительная информация</span>
                        <span className='event-hashtag'>#ДисСовет</span>
                    </div>
                </div>
                <div className="calendar-event">
                    <div className='event-date'>
                        <span className='event-date-day'>20</span>
                        <span className='event-date-month'>ноября</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>Событие</h2>
                        <span className='event-description'>Описание события или дополнительная информация</span>
                        <span className='event-hashtag'>#ДисСовет</span>
                    </div>
                </div>
            </div>
            <div className="calendar-section"></div>
        </div>
    )
}

export default EventCalendarBlock