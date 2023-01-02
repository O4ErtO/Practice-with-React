import React from 'react';
import { useState } from 'react';

function Input (){
    const[value, setValues] = useState('') 



    return(
       
            <div>
                <h6>
                    {value}<input type="text" value={value}/>
                    
                </h6>
            </div>

        
    );

}
export default Input;