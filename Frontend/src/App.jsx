import React from 'react';
import AppRoutes from './Approutes';
import { AuthProvider } from './features/auth/auth.context.jsx';
import { PostProvider } from './features/post/post.context.jsx';

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <main>
          <AppRoutes />
        </main>
      </PostProvider>
    </AuthProvider>
  );
};

export default App;
