import * as React from 'react'

const AboutBlock = ({news}) => {
    let style = {
        backgroundImage: "url(/img/otherNews1.jpg)",
        backgroundPosition: "bottom -50px right 0px",
        backgroundSize: "cover"
        //backgroundColor: "red"
    }

    return (
        <div className="about-block">
            <div className="about-section">
                <div className="about-data">
                    <h3 className="about-title">Об институте</h3>
                    <p className="about-description" style={{marginBottom: "15px"}}>Институт молекулярной биологии Российской академии наук был организован как Институт радиационной и физико-химической биологии (ИРФХБ) АН СССР Постановлением Президиума Академии наук СССР от 26 апреля 1957 г. № 370. Лишь в соответствии с Постановлением Президиума АН СССР от 17 апреля 1959 года № 281, назначившим В.А. Энгельгардта директором, Институт фактически начал работу. ИРФХБ АН СССР переименован в Институт молекулярной биологии АН СССР Постановлением Президиума Академии наук СССР № 328 от 18 июня 1965 г. Постановлением Совета Министров СССР от 22 марта 1988 г. № 357 и Распоряжением Президиума Академии наук СССР от 12 мая 1988 г. № 10123-635 Институту молекулярной биологии АН СССР присвоено имя В.А. Энгельгардта.</p>
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