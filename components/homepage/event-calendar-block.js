import * as React from 'react'

const EventCalendarBlock = ({events}) => {
    let style = {
        backgroundImage: `url(${events[0].image})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
        //backgroundColor: "red"
    }

    return (
        <div className="event-calendar-block">
            <div className="event-hero-section" style={style}>
                <div className="side-section">
                    <div className="news-data">
                        <h1 className="news-title">{events[0].title}</h1>
                        <p className="news-description">{events[0].description}</p>
                    </div>
                    <div className="news-bottom-block">
                        <span className="news-date">{events[0].date}</span>
                        <a className="news-link button-see-more">Подробнее</a>
                    </div>
                </div>
            </div>
            <div className="events-section">
                <span className='calendar-month'>2022</span>
                <div className="calendar-event">
                <div className='event-date'>
                        <span className='event-date-day'>{events[1].day}</span>
                        <span className='event-date-month'>{events[1].month}</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>{events[1].title}</h2>
                        <span className='event-description'>{events[1].description}</span>
                        <span className='event-hashtag'>{events[1].tag}</span>
                    </div>
                </div>
                <div className="calendar-event">
                    <div className='event-date'>
                        <span className='event-date-day'>{events[2].day}</span>
                        <span className='event-date-month'>{events[2].month}</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>{events[2].title}</h2>
                        <span className='event-description'>{events[2].description}</span>
                        <span className='event-hashtag'>{events[2].tag}</span>
                    </div>
                </div>
                <div className="calendar-event">
                    <div className='event-date'>
                        <span className='event-date-day'>{events[3].day}</span>
                        <span className='event-date-month'>{events[3].month}</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>{events[3].title}</h2>
                        <span className='event-description'>{events[3].description}</span>
                        <span className='event-hashtag'>{events[3].tag}</span>
                    </div>
                </div>
                <div className="calendar-event">
                    <div className='event-date'>
                        <span className='event-date-day'>{events[4].day}</span>
                        <span className='event-date-month'>{events[4].month}</span>
                    </div>
                    <div className='event-data'>
                        <h2 className='event-title'>{events[4].title}</h2>
                        <span className='event-description'>{events[4].description}</span>
                        <span className='event-hashtag'>{events[4].tag}</span>
                    </div>
                </div>
            </div>
            <div className="calendar-section"></div>
        </div>
    )
}

export default EventCalendarBlock