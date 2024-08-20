import React, { useState, useEffect } from 'react';

const RandomBinaryChar = ({ text }: { text: string }) => {
    const [currentString, setCurrentString] = useState(text.split(''));
    const originalString = text.split('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentString((prevString) => {
                // Randomly select an index to change
                const randomIndex = Math.floor(Math.random() * prevString.length);

                // If the character at the random index is '0' or '1', switch it back to the original character
                if (prevString[randomIndex] === '0' || prevString[randomIndex] === '1') {
                    const newString = [...prevString];
                    newString[randomIndex] = originalString[randomIndex];
                    return newString;
                } else {
                    // Change one character to '0' or '1'
                    const newChar = Math.random() > 0.5 ? '0' : '1';
                    const newString = [...prevString];
                    newString[randomIndex] = newChar;
                    
                    // Schedule a switch back to the original character after 100 milliseconds
                    setTimeout(() => {
                        setCurrentString((prevString) => {
                            const revertString = [...prevString];
                            revertString[randomIndex] = originalString[randomIndex];
                            return revertString;
                        });
                    }, 200);
                    
                    return newString;
                }
            });
        }, 200);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [originalString]);

    return (
        <span className='' >
            {currentString.join('')}
        </span>
    );
};

export default RandomBinaryChar;
