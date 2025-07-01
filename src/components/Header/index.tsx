import { NavLink } from "react-router-dom"
import "./styles.css"
import githubImg from "./assets/github.svg"
import linkedinImg from "./assets/linkedin.svg"
import instagramImg from "./assets/instagram.svg"

function Header() {
  return (
    <>
      <header className="header">
        <h3>{"<Guilherme />"}</h3>
        <nav className="header-nav">
          <NavLink className="nav-link" to="/">Início</NavLink>
          <NavLink className="nav-link" to="/projects">Projetos</NavLink>
          <NavLink className="nav-link" to="/about-me">Sobre</NavLink>
          <NavLink className="nav-link" to="/my-abilityes">Minhas Habilidades</NavLink>
          <NavLink className="nav-link" to="404 notfound">404 test</NavLink>
        </nav>
        <div className="header-social">
          <img src={githubImg} alt="" />
          <img src={linkedinImg} alt="" />
          <img src={instagramImg} alt="" />
        </div>
      </header>
    </>
  )
}

export default Header
// This file is part of the My Portfolio project.