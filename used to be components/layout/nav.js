import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="navbar">
          <div className="navbar-container">
              <a className="navbar-element">Об институте</a>
              <a className="navbar-element">Диссовет</a>
              <Link href={"/section/aspirantura/gia"}><a className="navbar-element">Образование</a></Link>
              <a className="navbar-element">ЦКП "Геном"</a>
              <a className="navbar-element">Новости</a>
              <a className="navbar-element">Календарь событий</a>
          </div>

      </nav>
    </div>
  )
}

export default Nav