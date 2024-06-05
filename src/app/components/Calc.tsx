'use client';
import { useState } from 'react'
import Button from './Button';

function Calc() {
    
    const changeHandler = () =>{

    }

    return (
        <div className="font-serif bg-black rounded-xl p-7 max-w-[500px] overflow-hidden">
            <input  className="w-full h-[100px] border-none outline-none text-white text-[5rem] text-left bg-[#3333338e]" type="text" readOnly/>
            <input  className="w-full h-[100px] border-none outline-none text-white text-[5rem] text-left bg-[#3333338e]" type="text" readOnly/>
            <div className="grid grid-cols-4 gap-4 p-6">
                <Button value={"AC"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"+/-"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"%"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"/"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"7"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"8"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"9"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"x"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"4"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"5"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"6"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"-"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"1"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"2"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"3"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"+"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"0"} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"."} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                <Button value={"="} click={()=>changeHandler} className={"hover:bg-[#414141] bg-[#333333]"}/>
                
            </div>
        </div>
    )
}

export default Calc



/**
    <Operations handleButtonClick={handleButtonClick} value={"AC"} operation={"AC"} color={"bg-[#A5A5A5] hover:bg-[#888787]"}/>
                <Operations handleButtonClick={handleButtonClick} operation={"+/-"} color={"bg-[#A5A5A5] hover:bg-[#888787]"}/>
                <Operations handleButtonClick={handleButtonClick} operation={"%"} color={"bg-[#A5A5A5] hover:bg-[#888787]"}/>
                <Operations handleButtonClick={handleButtonClick} operation={"/"}/>
                    <Numbers handleButtonClick={handleButtonClick} number={7}/>
                    <Numbers handleButtonClick={handleButtonClick} number={8}/>
                    <Numbers handleButtonClick={handleButtonClick} number={9}/>
                <Operations handleButtonClick={handleButtonClick} operation={"x"}/>
                    <Numbers handleButtonClick={handleButtonClick} number={4}/>
                    <Numbers handleButtonClick={handleButtonClick} number={5}/>
                    <Numbers handleButtonClick={handleButtonClick} number={6}/>
                <Operations handleButtonClick={handleButtonClick} operation={"-"}/>
                    <Numbers handleButtonClick={handleButtonClick} number={1}/>
                    <Numbers handleButtonClick={handleButtonClick} number={2}/>
                    <Numbers handleButtonClick={handleButtonClick} number={3}/>
                <Operations handleButtonClick={handleButtonClick} operation={"+"}/>
            </div>
            <div className="flex justify-center gap-2 -mt-2">
                <Numbers handleButtonClick={handleButtonClick} number={0} width={"w-[200px]"}/>
                <Operations handleButtonClick={handleButtonClick}  operation={"."} color={"bg-[#333333] hover:bg-[#414141]"}/>
                <Operations handleButtonClick={handleButtonClick} value={"="} operation={"="}/>
 */