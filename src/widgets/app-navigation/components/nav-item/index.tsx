import React, { ComponentType, SVGProps, createElement } from 'react'
import { NavLink } from 'react-router-dom'

import Typography from 'shared/ui/typography'
import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  name: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  path: string
}

const NavItem: React.FC<Props> = ({ name, icon, path }) => {
  const Icon = createElement(icon, { className: 'nav-item__icon', width: 26, height: 26 })

  return (
    <NavLink
      to={path}
      className={({ isActive }) => classNames('nav-item', isActive ? 'nav-item_active' : undefined)}
    >
      {Icon}
      <Typography
        tag="span"
        size="14"
        weight="600"
      >
        {name}
      </Typography>
    </NavLink>
  )
}

export default NavItem
