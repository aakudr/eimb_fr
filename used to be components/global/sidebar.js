import React from 'react'
import { useEffect } from 'react'
import SidebarLink from './sidebarLink'

export const Sidebar = ({title, content, slug}) => {

  useEffect(() => {
    window.onscroll = () => {
      const sidebar = document.getElementsByTagName('aside')[0]
      const sticky = sidebar.offsetTop
      if (window.pageYOffset >= sticky) {
        sidebar.classList.add("sticky")
      } else {
        sidebar.classList.remove("sticky")
      }
    }
  }, [])

  return (
    <aside>
        <h2>{title}</h2>
        <nav>
            {content.map((item) => {
                return <SidebarLink 
                    text={item.attributes.title}
                    href={`/section/${slug}/${item.attributes.pid}`}
                />
            })}
        </nav>
    </aside>
  )
}