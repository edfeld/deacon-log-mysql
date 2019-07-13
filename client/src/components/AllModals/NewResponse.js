import React from 'react';
import './post.css';


const NewResponse = props => {
 let postId = props.postId
    console.log("props.value: ", props.value);
let commentType = ["Comment", "Agreement", "Disagreement"]

    return(
    <div className="postBackground">
        <h2 style={{color: 'black'}}>Make A New Response</h2>
        <div>
        </div>
        <div>
            <p>Context</p>
            <div className="input-group">
                <textarea 
                    className="form-control" 
                    aria-label="With textarea"
                    name="commentContent"
                    value4={props.value} value4 is undefined
                    onChange={props.handleChange}
                    >
                </textarea>
            </div>
            <p>What Type of Entry?</p>
            <div style={{width: '100%'}}>
                <select value={props.responseType} onChange={props.handleChange}>
                    {commentType.map( comType => (
                        <option value={comType}>{comType}</option>
                    ))}
                    {/* <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option> */}
                </select>
            </div>

        <button onClick={() => props.comment(postId)}>POST</button>
        </div>
    </div>
    )
    
};

export default NewResponse;