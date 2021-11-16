import React, { useState } from 'react';
import { Calculator } from '../Calculator/Calculator';
import './Content.sass';



export const Content = (props) => {
    return (
        <div className="content">

            <div className='calculator'>
                <Calculator currently={props.currently}/>

            </div>
            <div className='currency'>

            </div>

        </div>
    );
}
