import * as React from 'react'

const HeroNewsSlider = ({news}) => {
    let style = {
        backgroundImage: "url(/img/7449.jpg)"
        //backgroundColor: "red"
    }

    return (
        <div className="hero-news-slider" style={style}>
            <div className="side-section">
                <div className="news-data">
                    <h1 className="news-title">Заголовок новости</h1>
                    <p className="news-description">Описание новости</p>
                </div>
                <div className="news-bottom-block">
                    <span className="news-date">26.10.2021</span>
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