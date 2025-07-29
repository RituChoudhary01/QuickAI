import React, { useState } from 'react'
import Markdown from 'react-markdown'

function CreationItem({ item }) {
  const [expanded, setExpanded] = useState(false)

  const formattedDate = new Date(item.created_at).toLocaleDateString()

  return (
    <div 
      onClick={() => setExpanded(!expanded)} 
      className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md'
    >
      <div className='flex justify-between items-center gap-4'>
        <div>
          <h2 className='font-medium text-base'>{item.prompt}</h2>
          <p className='text-gray-500'>{item.type} - {formattedDate}</p>
        </div>
        <button 
          className='bg-[#eff6ff] border border-[#bfdbfe] text-[#1e40af] px-4 py-1 rounded-full text-xs'
          onClick={(e) => {
            e.stopPropagation() // Prevents triggering expand on button click
          }}
        >
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className='mt-3'>
          {item.type === 'image' ? (
            <img 
              src={item.content} 
              alt="generated content" 
              className='w-full max-w-md ' 
            />
          ) : (
            <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-700'>
              <div className='reset-tw'>
             <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CreationItem
