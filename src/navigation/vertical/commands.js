// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, Tag, ShoppingCart, User, Users, Shield } from 'react-feather'

export default [
  
  {
    id: 'commands',
    title: 'Commands',
    icon: <Tag size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/commands/table'
      },
      {
        id: 'create',
        title: 'Create',
        icon: <Circle size={12} />,
        navLink: '/commands/create'
      }
    ]
  }
]
