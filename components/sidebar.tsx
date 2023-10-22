import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { useContext } from "react";
import { SidebarContext } from "@/app/providers";
import {AiOutlineClose} from "react-icons/ai"
export default function Sidebar() {
	const {isSidebarVisible,setSidebarVisible}= useContext(SidebarContext)

    const mybots = [
        {
            name:"Developer",
            image:"./../4712010.png"
        },
        {
            name:"Community manager",
            image:"./../4712010.png"
        },
        {
            name:"Marketer",
            image:"./../4712010.png"
        },
        {
            name:"CEO",
            image:"./../4712010.png"
        },
    ]
  return (
    <>
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>

        <Card isBlurred className="z-40 w-96 h-screen fixed right-0 top-0 p-5 transition-all duration-500 ease-in-out">

<CardHeader className="relative flex w-full">
    <h3>My Bots</h3>
    <AiOutlineClose onClick={()=>setSidebarVisible(false)} className="absolute right-2 flex justify-end h-5 w-5"/>
</CardHeader>
          <CardBody className="mt-12 flex flex-col gap-5">
          {/* Add your sidebar content here */}
        {

            mybots.map((a:any,i:number)=>{
                return(
                    <Card  isHoverable key={i}>
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
