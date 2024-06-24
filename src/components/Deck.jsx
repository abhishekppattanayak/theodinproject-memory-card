export default function Deck (props) {
  return(
    <div className="flex flex-wrap gap-2 grow justify-evenly content-center items-center sm:gap-4 sm:px-4 md:gap-8 md:px-8 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16 ">
      {props.children}
    </div>
  )
}