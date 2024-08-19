import React from 'react'

const NeBaButton = (props) => {
  return (
    <div className='flex justify-center items-center gap-3'>
        <button onClick={props.func}  className={`font-bold py-2 px-4 rounded ${props.disabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-900'}`}
        >
           {props.status}
        </button>
    </div>
  )
          

}

export default NeBaButton