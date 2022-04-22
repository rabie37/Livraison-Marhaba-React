import { lazy } from 'react'

const TablesRoutes = [
    {
        path: '/products/table',
        component: lazy(() => import('./../../../views/dashboard/products/TableServerSide'))
    },
    {
        path: '/products/create',
        component: lazy(() => import('./../../../views/dashboard/products/create'))
    },
    {
        path: '/products/edit/:id',
        component: lazy(() => import('./../../../views/dashboard/products/edit'))
    }
]

export default TablesRoutes