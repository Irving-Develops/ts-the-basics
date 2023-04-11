type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
 }

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name} have ${props.messageCount} unread messages` : 'Please sign up'}
                
            
            </h2>
        </div>
    )
}