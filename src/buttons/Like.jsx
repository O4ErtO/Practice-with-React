
import React from "react";
import { useState } from "react";
function But(){ 
    const[likes, setLikes] = useState(0) 
    function like() {
        setLikes(likes + 1)
    }
    function dislike() {
        setLikes(likes - 1)

    }
    return(
        <div className="But">
            <p className="likr">{likes}</p>
             <button onClick={like} className = "button">
            like
            </button> 
            
           
        </div>
    );
}
export default But;