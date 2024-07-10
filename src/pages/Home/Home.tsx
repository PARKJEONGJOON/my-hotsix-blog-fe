import Header from "../../components/Header/Header";
import PostList from "../../components/Home/PostList";
import SideUser from "../../components/Home/SideUser";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-row justify-between px-44">
                <SideUser />
                <PostList />
            </div>
        </div>
        
    )
}

export default Home;
