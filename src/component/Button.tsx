type ButtonProps = {
    handleClick : () => void
}
export const Button = (props:ButtonProps) => {
    return (
        <div>
            <button onClick={props.handleClick}>Button</button>
        </div>
    )
}