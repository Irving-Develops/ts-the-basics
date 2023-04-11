type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
 }

export const Greet = (props: GreetProps) => {

    const {messageCount = 0} = props;
    return (
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name} have ${messageCount} unread messages` : 'Please sign up'}
                
            
            </h2>
        </div>
    )
}