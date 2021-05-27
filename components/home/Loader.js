import react, { useState, useEffect } from 'react';
import { loaderStyles } from 'styles';


const Loader = (props) => {

    const {text, maxTime} = props;
    const timePerChar = Number(maxTime) / text.length;
    const [{frase, pos}, setFrase] = useState({frase: '', pos: 0})

    useEffect(() => {
        if (pos === text.length) return;

        const delay = setTimeout(() => {
            setFrase({frase:frase+text[pos], pos: pos+1})
        }, timePerChar)

    }, [frase]);
   
    return (
        <div>
        <div className="loader-container">
            <h2 className="loader-phrase">{frase}</h2>
        </div>
        <style jsx global>{loaderStyles}</style>
        </div>

    )
}

export default Loader;