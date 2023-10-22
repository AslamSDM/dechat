import {Card,CardBody,CardFooter,CardHeader} from "@nextui-org/card"
import {Divider} from "@nextui-org/divider"
interface chat{
    context:any
}
export  function Chat({context}:{context:any}) {
    console.log("Context is",context)
    // const messages = [
    //     {
    //         sender:"CEO",
    //         message:"The user needs a fullstack app"
    //     }
    // ]
    return(
        <Card className="lg:w-1/2 lg:mb-6 md:w-full">
            <CardHeader>
                <p>Chat Room</p>
            </CardHeader>
            <CardBody>
                {
                    context.map((a:any,i:number)=>{
                        let role = "User"
                        if (a.role === "assistant"){
                            role = "Developer"
                        }
                    return(
                <Card shadow="md" key={i}>
                    <CardHeader className={a.role=="assistant"?"justify-start":"justify-end"}>
                        {role}
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        {a.content}
                    </CardBody>
                </Card>
                    )
                    })
                }
            </CardBody>
        </Card>
    )
    
}