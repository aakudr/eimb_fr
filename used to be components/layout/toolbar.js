import React from 'react'
import Link from 'next/dist/client/link'

function Toolbar() {
  return (
    <div className='toolbar'>
        <Link href={"/home"}>
            <div className='toolbar-left'>
                <div className='toolbar-logo'></div>
                <div className='toolbar-title-container'>
                    <span className='toolbar-title'>Институт молекулярной биологии им. В.А. Энгельгардта</span>
                    <span className='toolbar-title-extra'>Российской академии наук (ИМБ РАН)</span>
                </div>
            </div>
        </Link>
        <div className='toolbar-right'>
            <div className='toolbar-tools-profile'>
                <svg style={{height: "20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path style={{fill: "white"}} d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
            </div>
            <div className='toolbar-tools-menu' onClick={(e) => {
            let target = document.getElementsByClassName("navbar-container")[0]
            if(target.style.maxHeight != "1000px") {target.style.maxHeight = "1000px"}
            else {target.style.maxHeight = "0"}
            }}>
                <svg style={{height: "20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path style={{fill: "white"}} d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
            </div>
            <div className='toolbar-tools-mail'>
                <svg style={{height: "20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{fill: "white"}} d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
            </div>
            <div className='toolbar-tools-search'>

            </div>
        </div>
    </div>
  )
}

export default Toolbar