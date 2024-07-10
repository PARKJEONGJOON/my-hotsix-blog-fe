import Post from "./Post";
import DemoData from "./DemoData";

const PostList = () => {
    return(
        <div className="pt-14">
            {DemoData.map(item => (
                <div key={item.id} className="mb-8">
                    <Post title={item.title} content={item.content} thumbSrc={item.thumb} />
                </div>
            ))}            
        </div>
    )
}

export default PostList;