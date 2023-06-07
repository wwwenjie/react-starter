import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Hitokoto, Landing, NotFound } from '@pages'
import { ROUTE_PATHS } from '@routes/constants'

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
