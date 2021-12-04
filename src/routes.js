import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AcademicLevel = React.lazy(() => import('./views/academic/AcademicLevel'))
const AddAcademic = React.lazy(() => import('./views/academic/AddAcademic'))
const Book = React.lazy(() => import('./views/book/Book.js'))
const AddBook = React.lazy(() => import('./views/book/AddBook'))
const EditBook = React.lazy(() => import('./views/book/EditBook.js'))
const ClassLevel = React.lazy(() => import('./views/class/ClassLevel.js'))
const AddClass = React.lazy(() => import('./views/class/AddClass'))

const routes = [
  { path: '/admin', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/academiclevel', name: 'AcademicLevel', component: AcademicLevel},
  { path: '/admin/addacademic', name: 'AddAcademic', component: AddAcademic},
  { path: '/admin/book', name: 'Book', component: Book},
  { path: '/admin/addbook', name: 'AddBook', component: AddBook}, 
  { path: '/admin/editbook/:id', name: 'EditBook', component: EditBook },
  { path: '/admin/class', name: 'ClassLevel', component: ClassLevel },
  { path: '/admin/addclass', name: 'AddClass', component: AddClass },
]

export default routes
