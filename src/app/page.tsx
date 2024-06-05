import Calc from "./components/Calc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calc/>
    </main>
  );
}


/**

  <div className="flex bg-blue-300">
        <div className="flex flex-wrap gap-2 p-5 justify-center items-center flex-row-reverse w-60 -mr-10">
          <Numbers number={9}/>
          <Numbers number={8}/>
          <Numbers number={7}/>
          <Numbers number={6}/>
          <Numbers number={5}/>
          <Numbers number={4}/>
          <Numbers number={3}/>
          <Numbers number={2}/>
          <Numbers number={1}/>
          <Operations operation={"."}/>
          <Numbers number={0} width={"w-[110px]"}/>
        </div>
        <div className="flex flex-col flex-wrap p-5 gap-2">
          <Operations operation={"/"}/>
          <Operations operation={"-"}/>
          <Operations operation={"-"}/>
          <Operations operation={"-"}/>
          <Operations operation={"-"}/>
        </div>
      </div>

 */
