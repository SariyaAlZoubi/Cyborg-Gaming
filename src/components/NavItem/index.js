
export const NavItem = (props) => {
  return (
    <li className="nav-item">
        {props.children}
    </li>
  )
}


const NavItemDropDow = (props) => { 
    return (
        <li className="nav-item dropdown">
            {props.children}
        </li>
    )   
}

export {NavItemDropDow}
