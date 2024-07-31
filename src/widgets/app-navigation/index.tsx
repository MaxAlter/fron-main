import React from 'react'

import NavItem from './components/nav-item'
import { LIST_OF_LINKS } from './data/list-of-links.ts'
import './styles.scss'

const AppNavigation: React.FC = () => {
  return (
    <nav className="app-nav">
      <ul className="app-nav__list">
        {LIST_OF_LINKS.map((item, index) => (
          <li key={index}>
            <NavItem
              path={item.path}
              icon={item.icon}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AppNavigation
