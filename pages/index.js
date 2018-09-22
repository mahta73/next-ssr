// import React from 'react';
import Link from 'next/link';

/*
    All you need to do is just have components in your pages directory
*/
const Index = () => (
    <div>
        <h1>I LOVE COMPUTERS</h1>
        <h2>I enjoy readig books and working with computers</h2>
        <h3>I am building tons of skills at work</h3>

        <hr />
        <p>If you want to know more about me click here</p>
        <Link href = './about'>
        <button> about me </button>
        </Link>

    </div>
);

export default Index;