export const Button = ({children,className, ...props}) => {
    return(
        <button className={`w-[184] h-[35px] p-2.5 bg-gradient-to-r from-white to-white rounde-[18px] shadow border border-gray-300 justify-center items-center gap-2.5 inline-flex backdrop-blur-md${className}`}
                {...props}
        >
            <div className="text-center text-[#343434] text-xs font-normal font-['Inter']">{children}</div>
        </button>
    )
}