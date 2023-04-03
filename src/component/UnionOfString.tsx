type StatusProps = {
    status: 'loading' | 'sucess' | 'error'
}
export const UnionOfString = (props:StatusProps) => {
    let message 
    if(props.status === 'loading'){
        message = 'Loading........'
    } else if(props.status === 'sucess') {
        message = 'Data Fetched Successfully'
    } else if(props.status === 'error') {
        message = 'Error Feteching Data'
    }
    return (
        <div>
            <h3>Status - {message}</h3>
        </div>
    )
}