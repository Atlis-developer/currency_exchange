import React from 'react';
import { Calculator } from '../Calculator/Calculator';
import './Content.sass';



export const Content = (props) => {
    let data = new Date().toString();
    return (
        <div className="content">
            <h2>Калькулятор</h2>
            <div className='calculator-first'>
                <Calculator currently={props.currently} />
            </div>
            <div className='calculator-second'>
                <Calculator currently={props.currently} />
            </div>
            <h2>Курс валют</h2>
            <div className='data'>
                {data}
            </div>
            <div className='exchange-rates'>
                <div className='head'>
                    <div className='part'>
                        Валюта
                    </div>
                    <div className='part'>
                        Покупка
                    </div>
                    <div className='part'>
                        Продажа
                    </div>
                </div>
                <div className='currencies'>
                    {props.currently.slice(0, 3).map(c =>
                        <div className='currency' key={c.sale}>
                            <div className='name' key={c.ccy}>
                                Курс {c.ccy}/{c.base_ccy}
                            </div>
                            <div className='trade' key={c.buy}>
                                {parseFloat(c.buy).toFixed(2)}
                            </div>
                            <div className='trade' key={c.sale}>
                                {parseFloat(c.sale).toFixed(2)}
                            </div>
                        </div>)}
                </div>
            </div>

        </div>
    );
}
