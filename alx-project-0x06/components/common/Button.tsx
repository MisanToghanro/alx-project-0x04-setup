

export interface ButtonProps{
    buttonLabel:string,
    buttonBackgroundColor:'red' | 'blue' | 'orange' | 'green' | 'black',
    action?: () => void
}

    const Colors:Record<ButtonProps[`buttonBackgroundColor`], string> = {

     red: 'bg-red-500',
  blue: 'bg-blue-500',
  orange: 'bg-orange-500',
  green: 'bg-green-500',
  black: 'bg-black',
    }

const Button: React.FC<ButtonProps> = ({buttonLabel,buttonBackgroundColor,action}) => {


   const backgroundColorClass = Colors[buttonBackgroundColor];

    return(
        <button onClick={action} className={`${backgroundColorClass} px-8 py-3 text-white text-sm font-semibold rounded-full`}>
            {buttonLabel}
        </button>
    )
}
export default Button ;