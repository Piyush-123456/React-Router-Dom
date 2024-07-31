import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Piyush-123456')
            .then(response => response.json())  // Parse response to JSON
            .then(data => {
                console.log(data);
                setData(data);  // Set parsed data
            })
            .catch(err => {
                console.log(err);
            });
    }, []);  // Empty dependency array to run only once

    return (
        <center>
            {data ? <img src={data.avatar_url} alt="Github Avatar" /> : <p>Loading...</p>}
        </center>
    );
}

export default Github;

// export const githubInfo = async () => {
//     const data = fetch('https://api.github.com/users/Piyush-123456')
//     return data.json();
// }