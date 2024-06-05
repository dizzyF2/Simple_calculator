

interface type{
    operation:String;
    color?:String;
    handleButtonClick:any
    value?:String;
}   

function Operations({value, handleButtonClick, operation, color="bg-[#F2A33C] hover:bg-[#cf8c34]"}:type) {
    return (
        <button onClick={handleButtonClick()} value={`${value}`} className={`w-[100px] h-[100px]  rounded-full border-none ${color} text-[2rem] text-white font-bold cursor-pointer`}>
            {operation}
        </button>
    )
}

export default Operations