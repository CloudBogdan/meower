import axios from "axios";
import { useEffect, useState } from "react";
import { formatDate } from "./math";
import { IPost } from "./Post";

const CreatePostView: React.FC<{ loadPosts(): Promise<void> }> = ({ loadPosts })=> {

    const
        [text, setText] = useState<IPost["text"]>(""),
        [author, setAuthor] = useState<IPost["author"]>(""),
        [avatar, setAvatar] = useState<IPost["avatar"]>("😺");

    useEffect(load, []);
    useEffect(save, [text, author, avatar]);
    useEffect(()=> {

        document.title = `Meower ${ avatar || "😺" }`;
        
    }, [avatar]);

    async function createPost(e: React.FormEvent) {
        e.preventDefault();

        setText("");
        
        const data = await axios.post("/api/posts/create", { data: JSON.stringify({ text, author, avatar, date: formatDate(new Date()) }) });

        if (data.data.success) {
            loadPosts();
        }

    }
    function save(): void {

        localStorage.meower = JSON.stringify({ author, text, avatar });

    }
    function load(): void {

        const parsed = JSON.parse(localStorage.meower || null);
        if (!!!parsed) return;

        setAuthor(parsed.author);
        setText(parsed.text);
        setAvatar(parsed.avatar);

    }

    const AvatarButton: React.FC<{ icon: string }> = ({ icon })=> (
        <button
            type="button"
            className={ `btn btn-${ icon === avatar ? "primary" : "light" }` }
            onClick={ ()=> setAvatar(icon) }
        >{ icon }</button>
    );
    
    return (
        <form onSubmit={ createPost } className="mt-4 d-flex flex-column">

            <textarea
                value={ text }
                onChange={ e=> setText(e.target.value) }
                className="form-control mb-2" style={ { height: 150, minHeight: 100, maxHeight: 400 } }
                placeholder="Meow something"
            />
            
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                
                <div className="d-flex flex-column">
                    <div className="btn-group flex-wrap mb-2">
                        <AvatarButton icon="🐱" />
                        <AvatarButton icon="😺" />
                        <AvatarButton icon="😸" />
                        <AvatarButton icon="😹" />
                        <AvatarButton icon="😻" />
                        <AvatarButton icon="😼" />
                        <AvatarButton icon="😽" />
                        <AvatarButton icon="🙀" />
                        <AvatarButton icon="😿" />
                        <AvatarButton icon="😾" />
                    </div>
                    <input
                        value={ author }
                        onChange={ e=> e.target.value.length <= 17 ? setAuthor(e.target.value) : 0 }
                        type="text" placeholder="Enter your name"
                        className="form-control" style={ { width: 160 } }
                    />
                </div>

                <button disabled={ !(!!author && !!text) } type="submit" className="btn btn-primary">Meow! { avatar }</button>
                
            </div>
            
        </form>
    );
};

export default CreatePostView;