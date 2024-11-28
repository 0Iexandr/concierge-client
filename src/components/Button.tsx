import { FC } from 'react';

interface ButtonProps {
  text: string;
  variant: 'white' | 'black';
}

const Button: FC<ButtonProps> = ({ text, variant }) => {
  const isWhiteVariant = variant === 'white';

  const borderColor = isWhiteVariant ? 'border-white' : 'border-additionalText';
  const textColor = isWhiteVariant ? 'text-white' : 'text-additionalText';
  const hoverTextColor = isWhiteVariant
    ? 'group-hover:text-additionalText'
    : 'group-hover:text-white';
  const focusTextColor = isWhiteVariant
    ? 'group-focus:text-additionalText'
    : 'group-focus:text-white';
  const bgColor = isWhiteVariant ? 'bg-white' : 'bg-additionalText';

  return (
    <button
      className={`relative overflow-hidden border-2 font-medium font-inter text-lg px-8 py-4 rounded transition-all duration-300 ease-in-out group ${borderColor} ${textColor}`}
    >
      <span
        className={`absolute inset-0 transform scale-x-0 origin-left transition-all duration-300 ease-in-out ${bgColor} group-hover:scale-x-100 group-focus:scale-x-100`}
      ></span>
      <span
        className={`relative transition-all duration-300 ease-in-out ${hoverTextColor} ${focusTextColor}`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
