import React, { useState } from 'react';
import './Calculator.sass';



export const Calculator = (props) => {

    console.log(props)
    const [sum, setSum] = useState(null)
    const [curr, setCurr] = useState(props.currently[0].ccy)

    let left = (e) => {
        return setSum(e.target.value)
    }

    let right = (e) => {
        return setCurr(e.target.value)
    }
    console.log(sum)
    console.log(curr)

    let result;

    if (sum && curr) {
        let currentValue = props.currently.find(c => c.ccy === curr)
        result = (sum / currentValue.buy).toFixed(2)
    }else{
        result = ''
    }

    return (
        <div className='calculator'>
            <div className="left">
                        <label className='field-left'>
                            <div className="give">
                                Отдаю
                            </div>
                            <input type="number" onChange={left}/>
                        </label>
                        <label className="currently-left">
                            <div>
                                <span>{props.currently[0].base_ccy}</span>
                            </div>
                        </label>
            </div>
            <div className="right">
                    <label className='field-right'>
                        <div className="get">
                            Получаю
                        </div>
                        <input type="number" value={result} readOnly />
                    </label>
                    <label className="currently-right">
                        <select className="form" onChange={right}>
                            {props.currently.slice(0, 3).map(c =>
                                <option value={c.ccy} key={c.ccy}>{c.ccy}</option>)}
                        </select>
                    </label>
            </div>
        </div>

    );
}
