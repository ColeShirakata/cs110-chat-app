import './Reply.css';
import { useState } from 'react';
import Comment from './Comment';

function Reply({onSubmit}) {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePost = (event) => {
        setPost(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && post) {
            setComments([...comments, { name, post }]);
            setName('');
            setPost('');
            onSubmit(`${name}: ${post}`);
        }
    };    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Name..." className="name-box" value={name} onChange={handleName}/>
                </div>
                <div>
                    <input type="text" placeholder="Write a new post" className="post-box" value={post} onChange={handlePost}/>
                </div>
                <div>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
            {comments.map((comment, index) => (
                <Comment key={index} name={comment.name} comment={comment.post} />
            ))}
        </div>
    );
}

export default Reply;