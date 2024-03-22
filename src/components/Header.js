import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className=' justify-center flex-col w-full text-white bg-black flex sm:justify-between gap-4 p-4 px-12 py-8 border-b border-white'>
            <Link to="/">
                <h1 className='text-center'>addMeNow</h1>
            </Link>
            <div className=' w-1/2 h-px mx-auto bg-gray-400'></div>
            <ul className='hidden sm:flex justify-center gap-8'>
                <Link to='/'>Contacts</Link>
                <Link to='/tags'>Tags</Link>
            </ul>
        </header>
    );
}
