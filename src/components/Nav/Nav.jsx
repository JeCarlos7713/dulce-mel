import "./Nav.css"

const Nav = ({items = []}) => {
  return (
    <nav>
        <ul>
            {
                items.map((item, i) => (<li key={i}> <a href={item.url}>{item.title}</a> </li>))
            }
        </ul>
    </nav>
  )
}

export default Nav