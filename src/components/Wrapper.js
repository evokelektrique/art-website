export default function Wrapper({ children }) {
   return (
      <div className="relative flex flex-col justify-between container bg-[#1c1c1c] border border-[#ccc] pt-6 pb-4 min-h-[90dvh] mx-auto">
         {children}
      </div>
   )
}