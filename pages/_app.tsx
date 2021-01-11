import axios from "axios";
import { useEffect, useState } from "react";
import CreatePostView from "../components/CreatePostView";
import { IPost, PostsList } from "../components/Post";

const App: React.FC<{ Component: React.ElementType }> = (props)=> {

    const [posts, setPosts] = useState<IPost[]>([]);
    
    async function loadPosts(): Promise<void> {

        const res = await axios.get("/api/posts");

        setPosts(((await res.data) as IPost[]).reverse());

    }

    useEffect(()=> {
        loadPosts();
    }, []);

    return (
        <div className="app">
            <props.Component />

            <div className="container" style={ { width: "100%", maxWidth: 800 } }>
                
                <CreatePostView loadPosts={ loadPosts } />

                <PostsList posts={ posts } />
                
            </div>
            
        </div>
    )
}

export default App;