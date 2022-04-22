// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, Tag,  ShoppingCart, User, Users, Shield } from 'react-feather'

export default [
  
  {
    id: 'products',
    title: 'Product',
    icon: <Tag size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/products/table'
      },
      {
        id: 'create',
        title: 'Create',
        icon: <Circle size={12} />,
        navLink: '/products/create'
      }
    ]
  }
]
