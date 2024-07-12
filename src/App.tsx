import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Toast from './components/Notice/Toast';
import Profile from './pages/Profile/Profile';
import PasswordEdit from './pages/PasswordEdit/PasswordEdit';
import EmailEdit from './pages/EmailEdit/EmailEdit';
import Post from './pages/Post/Post';
import Home from './pages/Home/Home';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ReactQueryDevtools />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/passwordedit" element={<PasswordEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/emailedit" element={<EmailEdit />} />
      </Routes>
      <Toast />
    </Router>
  </QueryClientProvider>
);

export default App;
