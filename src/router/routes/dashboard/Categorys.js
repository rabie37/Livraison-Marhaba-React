import { lazy } from 'react'

const TablesRoutes = [
    {
        path: '/categorys/table',
        component: lazy(() => import('../../../views/dashboard/categorys/TableServerSide'))
    },
    {
        path: '/categorys/create',
        component: lazy(() => import('../../../views/dashboard/categorys/create'))
    },
    {
        path: '/categorys/edit/:id',
        component: lazy(() => import('../../../views/dashboard/categorys/edit'))
    }
]

export default TablesRoutes