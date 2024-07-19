import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Toast from './components/Notice/Toast';

import PasswordEdit from './pages/PasswordEdit/PasswordEdit';
import Post from './pages/Post/Post';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import PostDetail from './pages/Post/PostDetail';
import PostEdit from './pages/Post/PostEdit';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ReactQueryDevtools />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/passwordedit" element={<PasswordEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/postedit/:id" element={<PostEdit />} />
      </Routes>
      <Toast />
    </Router>
  </QueryClientProvider>
);

export default App;
