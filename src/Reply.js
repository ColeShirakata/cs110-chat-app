import './Reply.css';
import { useState } from 'react';
import Vote from './Vote';

function Reply({name, comment}) {

    return (
        <div>
            <div className="comment-container">
                <div className="info">
                    <span className="name">{name}</span>
                    <span className="comment">{comment}</span>
                </div>
                <div className="vote-count">
                    <Vote />
                </div>
            </div>
        </div>
    );
}

export default Reply;