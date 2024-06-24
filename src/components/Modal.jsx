export default function Modal ({text}) {
  return (
    <div className="h-screen w-screen fixed bg-black/75" >
      <dialog className="fixed backdrop:bg-amber-400 inset-0 w-3/5 h-1/2 rounded-xl flex flex-col justify-center items-center border border-black dark:border-white dark:bg-black dark:text-white gap-4">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl " >{text}</span>
        <button className="border px-4 rounded-md text-base sm:text-lg md:text-2xl lg:text-3xl hover:bg-gray-50 dark:hover:bg-gray-900 " onClick={()=>location.reload()} >New Game</button>
      </dialog>
    </div>
  )
}