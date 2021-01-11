export interface IPost {
    id: string | number
    
    text: string
    date: string
    author: string
    avatar?: string
}

export const Post: React.FC<IPost> = props=> {
    return (
        <article className="card card-body">
            <p style={ { fontSize: 20 } }>{ props.text }</p>

            <footer className="d-flex justify-content-between">
                <span>
                    <span className="me-2">{ props.avatar || "😸" }</span>
                    <span>{ props.author }</span>
                </span>
                <span className="text-muted">{ props.date }</span>
            </footer>
        </article>
    );
};

export const PostsList: React.FC<{ posts: IPost[] }> = ({ posts })=> (
    <div className="d-flex flex-column gap-4 mt-5">
        { posts.length !== 0 ? posts.map((post, index)=>
            <Post { ...post } key={ index } />
        ) : <h1 className="d-flex align-items-center justify-content-center" style={ { height: 200 } }>No posts 😿</h1> }
    </div>
)