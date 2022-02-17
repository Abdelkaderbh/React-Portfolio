import "./menu.scss"

function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>

        <ul>
            <li onClick={()=> setMenuOpen(false)}> <a href="#intro"> Home </a> </li>
            <li onClick={()=> setMenuOpen(false)}> <a href="#portfolio"> Portfolio </a> </li>
            <li onClick={()=> setMenuOpen(false)}> <a href="#Works"> Works </a> </li>
            <li onClick={()=> setMenuOpen(false)}> <a href="#clients"> Clients Reviews</a> </li>
            <li onClick={()=> setMenuOpen(false)}> <a href="#contact"> Contact Me</a> </li>
        </ul>
    </div>
  )
}

export default Menu