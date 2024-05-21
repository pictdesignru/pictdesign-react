import { Link } from "react-router-dom";

const NavigationLink = ({link, title, child}) => {
  return(
    <NavLink href={link} className={({isActive}) => 'navigation__link ' + (isActive ? ' navigation__link_active' : '')}>
      {title}
    </NavLink>
  )
}

export default NavigationLink;