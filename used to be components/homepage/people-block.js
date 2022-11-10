import * as React from 'react'

const PeopleBlock = ({children, people}) => {
    let style = {
        backgroundImage: "url(/img/7449.jpg)"
        //backgroundColor: "red"
    }

    return (
        <div className="people-block">
            <div className='people-flexbox'>
                {children}
            </div>
            <a className='people-link button-see-more'>Подробнее</a>
        </div>
    )
}

export default PeopleBlock