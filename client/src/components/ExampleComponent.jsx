import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    // Define state variable
    const [count, setCount] = useState(0);

    // useEffect hook with an empty dependency array
    useEffect(() => {
        // This code will run after the first render
        console.log('Component mounted ');

        // Cleanup function
        return () => {
            console.log('Component unmounted');
        };
    }, [count]); // Empty dependency array means this effect will only run once

    // Increment count when the button is clicked
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment Count</button>
        </div>
    );
}

export default ExampleComponent;
