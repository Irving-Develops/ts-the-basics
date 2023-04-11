type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
 }

export const Greet = ({name, messageCount= 0, isLoggedIn }: GreetProps) => {

    return (
        <div>
            <h2>
                {isLoggedIn ? `Welcome ${name} have ${messageCount} unread messages` : 'Please sign up'}
                
            
            </h2>
        </div>
    )
}