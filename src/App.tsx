import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Toast from './components/Notice/Toast';

import PasswordEdit from './pages/PasswordEdit/PasswordEdit';
import Post from './pages/Post/Post';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';

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
        <Route path="/emailedit" element={<EmailEdit />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Toast />
    </Router>
  </QueryClientProvider>
);

export default App;
