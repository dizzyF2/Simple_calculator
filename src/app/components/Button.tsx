
interface props{
    value:String;
    click?: () => void;
    className?:String
}

function Button({value, click, className}:props) {
    return (
        <button className={`${className} text-center w-[100px] h-[100px]  rounded-full border-none text-[2rem] text-white font-bold cursor-pointer`}>
            {value}
        </button>
    )
}

export default Button