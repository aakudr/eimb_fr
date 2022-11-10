import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='footer-top'>
        <div className='footer-contacts'>
          <span>Адрес:</span>
          <div>
            <span>ГСП-1, 119991. г.Москва, ул. Вавилова д. 32, ИМБ РАН</span>
            <a>Схема проезда</a>
          </div>
          <div>
            <span>Подписаться на новости</span>
            <div>
              <div className='social-icon'></div>
              <div className='social-icon'></div>
              <div className='social-icon'></div>
            </div>
          </div>
        </div>
        <div className='footer-links'>
          <div className="footer-links-section">
            <span className='footer-links-title'>Полезные ресурсы</span>
            <span className='footer-link'>https://scholar.gooogle.com</span>
            <span className='footer-link'>https://scholar.gooogle.com</span>
            <span className='footer-link'>https://scholar.gooogle.com</span>
            <span className='footer-link'>https://scholar.gooogle.com</span>
            <span className='footer-link'>https://scholar.gooogle.com</span>
            <span className='footer-link'>https://scholar.gooogle.com</span>
            <span className='footer-link'>https://scholar.gooogle.com</span>
          </div>
          <div className="footer-links-section">
            <span className='footer-links-title'>Пресс-служба</span>
            <span className='footer-link'>Сотрудники пресс-службы</span>
            <span className='footer-link'>Наши публикации</span>
            <span className='footer-link'>Объявления пресс-службы</span>
            <span className='footer-link'>Шаблоны</span>
          </div>
          <div className="footer-links-section">
            <span className='footer-links-title'>Противодействие коррупции</span>
            <span className='footer-link'>Нормативные документы</span>
            <span className='footer-link'>Методические материалы и антикоррупционная экспертиза</span>
            <span className='footer-link'>Антикоррупционная деятельность в ИМБ РАН</span>
          </div>
        </div>
        <div className='footer-extra'>
          <span>8 (499) 135-14-05</span>
          <span>e-mail: isinfo@eimb.ru</span>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='toolbar-left'>
            <div className='toolbar-logo'></div>
            <div className='toolbar-title-container'>
                <span className='toolbar-title'>Институт молекулярной биологии им. В.А. Энгельгардта</span>
                <span className='toolbar-title-extra'>Российской академии наук (ИМБ РАН)</span>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer