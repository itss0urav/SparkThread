import Post from "../common/Post";

//these will come from the database
// const posts = [
//     { id: 0, title: "build reddit", author: "Sourav" },
//     { id: 1, title: "build medium", author: "Gokul" },
//     { id: 2, title: "build facebook", author: "Amal Sam" },
// ]

const style = {
    wrapper: 'space-y-2.5',
    
}

const Feed = ({posts}) => {
    return (
        <div className={style.wrapper}>
            {posts.map((post,id) => (
                <Post {...post} key={id}/>
            ))}
                
        </div>
    );
};

export default Feed;
