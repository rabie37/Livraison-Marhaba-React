// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Users, Shield } from 'react-feather'

export default [
  {
    header: 'Menu'
  },
  {
    id: 'dash-users',
    title: 'User',
    icon: <Users size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/users/table'
      },
      {
        id: 'create',
        title: 'Create',
        icon: <Circle size={12} />,
        navLink: '/users/create'
      }
    ]
  }
]
