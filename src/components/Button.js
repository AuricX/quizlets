const VARIANTS = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-300',
  secondary:
    'bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:ring-gray-300',
  ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-200',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const Button = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  rounded = true,
  type = 'button',
  disabled = false,
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center font-medium focus:outline-none transition-colors focus-visible:ring-2 focus-visible:ring-offset-2';
  const variantClass = VARIANTS[variant] || VARIANTS.primary;
  const sizeClass = SIZES[size] || SIZES.md;
  const roundClass = rounded ? 'rounded-lg' : 'rounded-none';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const classes = [base, sizeClass, variantClass, roundClass, disabledClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
