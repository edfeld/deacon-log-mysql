import React from 'react';
import './post.css';


const Comment = props => {
 let postId = props.postId
    console.log("Inside Comment - value:", props.value); 
    return(
    <div className="postBackground">
        <h2 style={{color: 'black'}}>Make A Comment</h2>
        <div>
        </div>
        <div>
            <p>Context</p>
            <div className="input-group">
                <textarea 
                    className="form-control" 
                    aria-label="With textarea"
                    name="commentContent"
                    // value4={props.value}  ERE20190324 - value4 is undefined
                    onChange={props.handleChange}
                    >
                </textarea>
            </div>
            <p>Is This A Rebuttal to the question?(yes or no)</p>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Please only type yes or no"
                    name="isRebuttal"
                    // value5={props.value}  ERE20190324 value5 is undefined
                    onChange={props.handleChange}
                />
        <button onClick={() => props.comment(postId)}>POST</button>
        </div>
    </div>
    )
    
};

export default Comment;