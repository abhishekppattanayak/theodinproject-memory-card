export default function Header (props) {
  return (
    <header className="flex flex-col px-2 py-4 content-center items-center sm:flex-row sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="grow text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Memory Card</div>
      <div className="flex flex-col items-center text-base sm:flex-row sm:text-lg sm:gap-4 md:text-xl lg:text-2xl xl:text-3xl">
        <span>Current Score: {props.current}</span>
        <span>Best Score: {props.best}</span>
      </div>
    </header>
  )
}