// components/Button.tsx
const Button = (onClick: () => void) => {
    return (
        <button onClick={onClick}>
            Click me
        </button>
    );
};

export default Button;