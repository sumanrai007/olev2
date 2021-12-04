import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Academic Level',
    to: '/admin/academiclevel',
  },
  {
    component: CNavItem,
    name: 'Book',
    to: '/admin/book',
  },
  {
    component: CNavItem,
    name: 'Class',
    to: '/admin/class',
  }
]

export default _nav
