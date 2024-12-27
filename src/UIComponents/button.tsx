export interface ButtonProps {
    disabled?: boolean,
    loading?: boolean,
    onClick?: () => void,
    color?: string,
    bg?: "primary" | "warning" | "error" | "success",
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,

}

export default function Button({
    disabled,
    loading,
    children,
    onClick,
    bg = 'primary',
    color = 'white',
    type = 'button',
  }: ButtonProps) {
    const bgClass =
      bg === 'primary'
        ? 'bg-primary hover:bg-primary focus:ring-primary'
        : bg === 'warning'
        ? 'bg-warning hover:bg-warning focus:ring-warning'
        : bg === 'error'
        ? 'bg-error hover:bg-error focus:ring-error'
        : '';
  
    return (
      <button
        disabled={disabled}
        type={type}
        className={`text-${color} ${bgClass} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center float-end`}
        onClick={onClick}
      >
        {loading ? (
          <i className="fa-solid fa-spinner fa-spin"></i>
        ) : (
          children
        )}
      </button>
    );
  }
  