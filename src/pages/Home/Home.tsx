import Header from "../../components/Header/Header";
import PostList from "../../components/Home/PostList";
import { UserContainer } from "../../components/Home/SideUser";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-row justify-between px-44">
                <UserContainer />
                <PostList />
            </div>
        </div>
        
    )
}

export default Home;
