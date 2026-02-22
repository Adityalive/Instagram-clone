import React from 'react'
import AppRoutes from './Approutes'
import { AuthProvider } from './features/auth/auth.context.jsx'

const App = () => {
  return (
    <AuthProvider>
      <main>
        <AppRoutes/>
      </main>
    </AuthProvider>
  )
}

export default App
