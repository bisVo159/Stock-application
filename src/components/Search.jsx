import React, { useState } from 'react'
import { mockSearchResults } from '../constants/mock';
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import SearchResult from './SearchResult';

function Search() {
    const [input,setInput]=useState("");
    const [bestMatches,setBestMatches]=useState(mockSearchResults.result)

    const clear=()=>{
        setInput("");
        setBestMatches([])
    }

    const updateBestMatches=()=>{
        setBestMatches(mockSearchResults.result)
    }
  return (
    <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96  bg-white border-neutral-200'>
        <input
        type='text'
        value={input}
        className='w-full px-4 py-2 focus:outline-none rounded-md'
        placeholder='Search Stock...'
        onChange={event=>setInput(event.target.value)}
        onKeyDown={e=>{
          if(e.key==='Enter'){
            updateBestMatches()
          }
        }}
        />
        
        {input&&<button onClick={clear} className='m-1'>
          <RxCross2 className='h-4 w-w text-gray-500'/>
        </button>}

        <button onClick={updateBestMatches}
        className='w-8 h-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2'
        >
          <IoSearchOutline className='h-4 w-w text-gray-100'/>
        </button>

        {input&&bestMatches.length>0&&<SearchResult results={mockSearchResults.result}/>}
    </div>
  )
}

export default Search