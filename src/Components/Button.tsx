interface Props {
    label: string
    onClick: () => void
    disabled: boolean

}

const Button = ({ label, onClick, disabled, }: Props) => {
    return (
        <div>
            <button onClick={onClick} disabled={disabled}>
                {label}
            </button>
        </div>
    );
};

export default Button;