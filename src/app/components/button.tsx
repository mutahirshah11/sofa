import React from 'react'

interface buttontype {
  name: string;
  onClick?: () => void;  // Declare the onClick prop as optional
}
const Button = ({name}:buttontype) => {
  return (
    <div>
            <button className="ml-4 px-6 py-2  text-black border-[1px] border-black rounded-lg hover:bg-yellow-200 hover:border-yellow-300 ">
               {name}
              </button>
    </div>
  )
}

export default Button