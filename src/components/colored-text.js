import {useState} from 'react';
export function ColoredText() {
    const [enteredColor, setEnteredColor] = useState('');
    function updateTextColorHandler(event) {
        setEnteredColor(event.target.value);
    };
    const coloredTextStyles = {
        background: 'green',
        color: enteredColor
    };
    return (
        <>
            <input type='text' onChange={updateTextColorHandler}/>
            <p style={coloredTextStyles}>This text’s color changes dynamically!</p>
        </>
    );
 };