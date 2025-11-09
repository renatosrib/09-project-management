export default function Button({children, classname = '', ...props}) {
    return (
        <button className={`bg-stone-600 h-12 text-stone-300 cursor-pointer ${classname}`} {...props}>{children}</button>
    )
}