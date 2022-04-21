import { lazy } from 'react'

const TablesRoutes = [
    {
        path: '/users/table',
        component: lazy(() => import('./../../../views/dashboard/users/TableServerSide'))
    },
    {
        path: '/users/create',
        component: lazy(() => import('./../../../views/dashboard/users/create'))
    },
    {
        path: '/users/edit/:id',
        component: lazy(() => import('./../../../views/dashboard/users/edit'))
    }
]

export default TablesRoutes
