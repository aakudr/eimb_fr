import * as React from 'react'

const NewsBlock = ({news}) => {
    let style = {
        backgroundImage: `url(${news.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
        //backgroundColor: "red"
    }

    return (
        <div className="news-block" style={style}>
            <div className="side-section">
                <div className="news-data">
                    <h1 className="news-title">{news.title}</h1>
                    <p className="news-description">{news.description}</p>
                </div>
                <div className="news-bottom-block">
                    <span className="news-date">{news.date}</span>
                    <a className="news-link button-see-more">Подробнее</a>
                </div>
            </div>
        </div>
    )
}

export default NewsBlock