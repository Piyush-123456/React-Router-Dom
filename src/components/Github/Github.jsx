import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData()


    return (
        <center>
            <img src={data.avatar_url} alt="Github Avatar" />
        </center>
    );
}

export default Github;

export const githubInfo = async () => {
    const data = await fetch('https://api.github.com/users/Piyush-123456')
    return data.json();
}