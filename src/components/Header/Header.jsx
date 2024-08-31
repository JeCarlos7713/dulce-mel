import "./Header.css"
import logo from "../../assets/logo.svg"
import Nav from "../Nav/Nav"

const Header = () => {

    const nav = [
        {url : "#home",     title: "Home"},
        {url : "#products", title: "Produtos"},
        {url : "#about",    title: "Sobre Nós"},
        {url : "#contact",  title: "Contato"}
    ]

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <Nav items={nav} />
        </header>
    )
}

export default Header