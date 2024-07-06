import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      {/* <h1>Blog</h1>
      <h3>로그인 안했을 때 로그인 보여주기</h3> */}
    </QueryClientProvider>
  );
}

export default App;
