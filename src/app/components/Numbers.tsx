
interface type{
    number:number
    width?:String
    handleButtonClick:any
}

function Numbers({handleButtonClick, number, width="w-[100px]"}:type) {
    return (
        <button onClick={handleButtonClick} className={`${width} hover:bg-[#414141] h-[100px] rounded-full text-white font-bold text-[2rem] bg-[#333333]`}>
            {number}
        </button>
    )
}

export default Numbers