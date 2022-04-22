import { lazy } from 'react'

const TablesRoutes = [
    {
        path: '/commands/table',
        component: lazy(() => import('../../../views/dashboard/commands/TableServerSide'))
    },
    {
        path: '/commands/create',
        component: lazy(() => import('../../../views/dashboard/commands/create'))
    },
    {
        path: '/commands/edit/:id',
        component: lazy(() => import('../../../views/dashboard/commands/edit'))
    }
]

export default TablesRoutes