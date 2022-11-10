import * as React from 'react'

const AboutBlock = ({news}) => {
    let style = {
        backgroundImage: "url(/img/7449.jpg)"
        //backgroundColor: "red"
    }

    return (
        <div className="about-block">
            <div className="about-section">
                <div className="about-data">
                    <h3 className="about-title">Об институте</h3>
                    <p className="about-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a className="about-link button-see-more">Подробнее</a>
                </div>
                <div className="about-bottom-block">
                    <div className="about-icon-link"></div>
                    <div className="about-icon-link"></div>
                    <div className="about-icon-link"></div>
                    <div className="about-icon-link"></div>
                </div>
            </div>
            <div className="image-section" style={style}/>
        </div>
    )
}

export default AboutBlock