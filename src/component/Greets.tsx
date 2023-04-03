type Greetsprops = {
    name:string
    messageCount:number
    isLoggedIn:boolean
}
export const Greet = (props:Greetsprops) => {
    return (
        <div>
            <h4>
        {props.isLoggedIn?`${props.name},This is an TypeScript,You got ${props.messageCount} messages`:`Welcome Guset`}
        </h4>
        </div>
    )
}