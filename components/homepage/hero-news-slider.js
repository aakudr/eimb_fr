import * as React from 'react'

const HeroNewsSlider = ({news}) => {
    let style = {
        backgroundImage: `url(${news[0].image})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
        //backgroundColor: "red"
    }

    return (
        <div className="hero-news-slider" style={style}>
            <div className="side-section">
                <div className="news-data">
                    <h1 className="news-title">{news[0].title}</h1>
                    <p className="news-description">{news[0].description}</p>
                </div>
                <div className="news-bottom-block">
                    <span className="news-date">{news[0].date}</span>
                    <a className="news-link button-see-more">Подробнее</a>
                </div>
            </div>
            <div className="control-section">
                <div className="control-button" />
                <div className="control-button" />
                <div className="control-button" />
                <div className="control-button" />
                <div className="control-button" />
            </div>
        </div>
    )
}

export default HeroNewsSlider