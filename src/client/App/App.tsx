import React, {useState} from 'react';
import {AppStyled} from './styles';
import './app.css';

const App = () => {
    console.log("App")
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("count");
    const [isShow, setIsShow] = useState(true);

    return (
        <div className='bg-color'>
            <AppStyled>
                Welcome to the React Final Boiler Plate
                <input value={value} onChange={(e)=>setValue(e.target.value)} />
                {isShow && <button className={`${value}`} onClick={() => setCount(count => count + 1)}>{count}</button>}
                <button id="btnShow">Console.log</button>
                <button onClick={()=>setIsShow(v => !v)}>Toggle show</button>
            </AppStyled>
        </div>
    );
};

export default App;
