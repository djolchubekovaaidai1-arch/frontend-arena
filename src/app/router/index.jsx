import { createBrowserRouter } from 'react-router-dom'
import AchievementsPage from '../../pages/Achievements'

import MainLayout from '../layout/MainLayout'

import HomePage from '../../pages/Home'
import JavaScriptPage from '../../pages/JavaScript'
import HTMLPage from '../../pages/HTML'
import CSSPage from '../../pages/CSS'
import ReactPage from '../../pages/React'
import ProfilePage from '../../pages/Profile'
import NotFoundPage from '../../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: '/javascript',
    element: (
      <MainLayout>
        <JavaScriptPage />
      </MainLayout>
    ),
  },
  {
    path: '/html',
    element: (
      <MainLayout>
        <HTMLPage />
      </MainLayout>
    ),
  },
  {
    path: '/css',
    element: (
      <MainLayout>
        <CSSPage />
      </MainLayout>
    ),
  },
  {
    path: '/react',
    element: (
      <MainLayout>
        <ReactPage />
      </MainLayout>
    ),
  },
  {
    path: '/profile',
    element: (
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    ),
  },
  {
    path: '/achievements',
    element: (
      <MainLayout>
        <AchievementsPage />
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
])