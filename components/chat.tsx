import {Card,CardBody,CardFooter,CardHeader} from "@nextui-org/card"
import {Divider} from "@nextui-org/divider"
export  function Chat() {
    const messages = [
        {
            sender:"CEO",
            message:"The user needs a fullstack app"
        }
    ]
    return(
        <Card>
            <CardHeader>
                <p>Chat Room</p>
            </CardHeader>
            <CardBody>
                {
                    messages.map((a:any)=>{
                    return(
                <Card>
                    <CardHeader>
                        {a.sender}
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        {a.message}
                    </CardBody>
                </Card>
                    )
                    })
                }
            </CardBody>
        </Card>
    )
    
}