import { createBrowserRouter } from 'react-router'
import Root from '../layout/Root'
import Allapps from '../pages/Allapps'
import InstalledApps from '../pages/InstalledApps'
import { Suspense } from 'react'
import Home from '../pages/Home'
import AppDetails from '../pages/AppDetails'


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                element: <Suspense fallback={<div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>}><Home /></Suspense>
            },
            {
                path: '/apps',
                Component: Allapps
            },
            {
                path: '/installedApps',
                Component: InstalledApps
            },
            {
                path: '/app/:id',
                Component: AppDetails
            }
        ]
    }
])
