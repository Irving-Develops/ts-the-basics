type StatusProps = {
    status: 'online' | 'offline' | 'Error';
}

export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'online') {
        message = 'Online'
    }else if(props.status === 'offline') {
        message = 'Offline'
    }else if(props.status ==="Error") {
        message = 'Error'
    }

return (
    <div>
        <h2>Status - {message}</h2>
    </div>
)
}