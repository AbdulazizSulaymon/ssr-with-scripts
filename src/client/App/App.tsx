import React, {useState} from 'react';
import {AppStyled} from './styles';
import './app.css';

const App = () => {
    console.log("App")
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("count");
    const [isShow, setIsShow] = useState(true);

    return (
        <div className="bg-color321">
            <div className="test2 tree">
                1
            </div>
        </div>
    );
};

export default App;
