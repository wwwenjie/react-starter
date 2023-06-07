import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/routes/constants'
import { Landing } from '@/pages/landing'
import { Hitokoto } from '@/pages/hitokoto'
import { NotFound } from '@/pages/notFound'

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <Navigate to="/landing" />,
  },
  {
    path: ROUTE_PATHS.LANDING,
    element: <Landing />,
  },
  {
    path: ROUTE_PATHS.HITOKOTO,
    element: <Hitokoto />,
  },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: <NotFound />,
  },
])
