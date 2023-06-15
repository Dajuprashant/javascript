import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className=" flex justify-between text-lg text-white bg-black">
      <h1 className="text-2xl p-3 px-10">sample web</h1>
      <nav className=" p-3 ">
        <NavLink className="px-5" to="/About">about</NavLink>
        <NavLink className="px-5" to="/Contact">contact</NavLink>
        <NavLink className="px-5" to="/Help">help</NavLink>
        <NavLink className="px-5" to="/Service">services</NavLink>

      </nav>

    </header>
  )
}
export default Header