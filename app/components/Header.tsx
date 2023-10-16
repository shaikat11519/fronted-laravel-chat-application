"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
      const router = useRouter();
      const [location, setLocation] = useState('');
  return (
    <div className='h-[130px] bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
      <div className='text-center mt-[10px]'>
        <h1 className='text-white text-5xl font-bold mb-2'>
          Before Group chatting, Please submit your name
        </h1>
        {/* SEARCH BAR */}
        <div className='text-left text-lg py-3 m-auto flex justify-center'>
          <input
            className='rounded  mr-3 p-2 w-[450px] focus:outline-none'
            type='text'
            placeholder='Please enter your name'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            onClick={() => {
              if (location === 'banana') return;
              router.push('/search');
            }}
            className='rounded bg-red-600 hover:bg-red-700 px-9 py-2 text-white'
          >
            {"Let's go"}
          </button>
        </div>
        {/* SEARCH BAR */}
      </div>
    </div>
  );
}
