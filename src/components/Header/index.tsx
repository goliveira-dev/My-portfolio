import { NavLink } from "react-router-dom"

function Header() {
  return (
    <>
      <h3>I am a header</h3>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink to="/about-me">Sobre</NavLink>
        <NavLink to="/my-abilityes">Minhas Habilidades</NavLink>
        <NavLink to="404 notfound">404 test</NavLink>
      </nav>
    </>
  )
}

export default Header
// This file is part of the My Portfolio project.