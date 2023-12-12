import React, { useState } from 'react'

const Lobby = () => {
    const [email, setEmail] = useState('')
    const [room, setRoom] = useState('')
    return (
        <div className='h-screen w-screen bg-neutral-800 flex justify-center items-center flex-col'>
            <div className='text-4xl font-bold text-white mb-8'>
                Join Now
            </div>
            <div className='h-1/2 w-2/3 flex justify-center items-center'>
                <form className='flex flex-col bg-white p-8 rounded-lg shadow-md'>
                    <input
                        type='text'
                        className='mb-4 p-2 border border-gray-300 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        required
                    />
                    <input
                        type='text'
                        className='mb-4 p-2 border border-gray-300 rounded-md'
                        placeholder='Room ID'
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        required
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300'
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Lobby