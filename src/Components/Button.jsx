import React from 'react';

const Button = (props) => {
  return (
    <div className='flex justify-center items-center gap-3'>
        <button onClick={props.func} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.number === props.page ? 'bg-red-500' : ''}`}>
            {props.number}
        </button>
    </div>
  );
}

export default Button;
