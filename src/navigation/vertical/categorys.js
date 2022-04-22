// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Tag, Shield } from 'react-feather'

export default [
  // {
  //   header: 'Admin'
  // },
  {
    id: 'categorys',
    title: 'Categorys',
    icon: <Tag size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/categorys/table'
      },
      {
        id: 'create',
        title: 'Create',
        icon: <Circle size={12} />,
        navLink: '/categorys/create'
      }
    ]
  }
]