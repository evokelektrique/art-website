export default function Header({ title, description, children }) {
    return (
        <>
            {/* Gradient */}
            <header className="py-4 lg:py-6 px-6 text-center items-center justify-center flex flex-col border-b border-[#ccc] ">

                {/* Title */}
                {title && (
                    <h1 className="text-2xl md:text-4xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400 mb-6">
                        {title}
                    </h1>
                )}

                {/* Description */}
                {description && (
                    <h2 className="text-3xl text-transparent font-light text-white">
                        {description}
                    </h2>
                )}

                {children && (
                    children
                )}
            </header>
        </>
    )
}