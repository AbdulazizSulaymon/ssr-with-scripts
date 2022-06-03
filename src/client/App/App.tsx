import React, {useState} from 'react';
import {AppStyled} from './styles';
import './app.css';

const App = () => {
    console.log("App")
    const [count, setCount] = useState(0);


    return (
        <div className='bg-color'>
            <AppStyled>
                Welcome to the React Final Boiler Plate
                <button id={"count"} onClick={() => setCount(count => count + 1)}>{count}</button>
                <button id="btnShow">Show</button>
            </AppStyled>
        </div>
    );
};

export default App;
