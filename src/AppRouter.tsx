import React, { FC } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { Landing, NotFound, Post } from '@pages'

const AppRouter: FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />

      <Route path="/landing" element={<Landing />} />

      <Route path="/post" element={<Post />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default AppRouter
