import className from "classnames";

function Button({children,
primary,
secondary,
success,
warning,
danger,
outline,
rounded,
...rest})
{
    const classes = className(rest.className,'flex items-center','px-3', 'py-1.5', 'border',{
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-600 bg-green-600 text-white': success,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-yellow-500': outline && warning,
        'text-green-600': outline && success,
        'text-red-500': outline && danger,
    }); 
    return(
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}


export default Button;