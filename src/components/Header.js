import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className=' justify-center w-full text-white bg-black flex sm:justify-between p-4 px-12 py-8'>
            <h1 className='text-center'>addMeNow</h1>
            <ul className='hidden sm:flex justify-center gap-4'>
                <Link to='/'>Contacts</Link>
                <Link to='/tags'>Tags</Link>
            </ul>
            <p>Logout</p>
        </header>
    );
}
