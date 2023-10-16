import { Chat } from "@/components/chat";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { useContext } from "react";
import { SidebarContext } from "@/app/providers";
export default function Sidebar() {
	const {isSidebarVisible,setSidebarVisible}= useContext(SidebarContext)

    const mybots = [
        {
            name:"CEO_bot#1725",
            image:""
        },
        {
            name:"CMO_bot#5625",
            image:""
        },
        {
            name:"CTO_bot#4725",
            image:""
        },
        {
            name:"DEV_bot#1325",
            image:""
        },
    ]
  return (
    <>
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>

        <Card isBlurred className="z-40 w-96 h-screen fixed right-0 top-0 p-5 transition-all duration-500 ease-in-out">

<CardHeader>
    <h3>My Bots</h3>
</CardHeader>
          <CardBody className="mt-12 flex flex-col gap-5">
          {/* Add your sidebar content here */}
        {

            mybots.map((a:any)=>{
                return(
                    <Card  isHoverable>
                        <CardBody className="flex items-center">
                            <Avatar/>
                            <p>{a.name}</p>

                        </CardBody>
                    </Card>
                )
            })
        }
        </CardBody>

        </Card>
        </div>

      
    </>)
}
