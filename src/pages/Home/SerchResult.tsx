import Header from '../../components/Header/Header';
import SerchPostList from '../../components/Home/SerchPostList';

const SerchResult = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row justify-center">
        <SerchPostList />
      </div>
    </div>
  );
};

export default SerchResult;
