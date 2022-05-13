
export default function Input(props) {
    return (
      <div className="relative inline-block text-left max-w-sm w-full"> 
        <div className="relative rounded-md "> 
          <input
            type={props.type}
            name={props.name} 
            className=" search shadow-md inline-flex justify-center w-full rounded-md border border-gray-300 shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            placeholder={props.placeholder}
            onChange={props.onChange}
            required={props.required}
          /> 
        </div>
      </div>
    )
  }
  