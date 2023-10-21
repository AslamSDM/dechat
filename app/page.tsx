"use client";
import { Chat } from "@/components/chat";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useContext, useState } from "react";
import { SidebarContext } from "./providers";
import Sidebar from "@/components/sidebar";
import Company from "@/components/companu";
import { Button } from "@nextui-org/button";
import axios from "axios"
export default function Home() {
  const { isSidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const [userin,setuserin]=useState("")
  const [resdata,setresdata]=useState("")
  // let context:any= [];
  const [context,setContext]= useState<any>([])
  const addContext = (item:any)=>{
    setContext((context:any)=>[...context,item])
  }
  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter') {
      // console.log('Enter key pressed!');
      sendMessage()
      // You can put your "send" logic here
    }
  };
  async function sendMessage() {
      const message = userin;
      if (!message) return;

      // Update UI with user message
      // const messagesDiv = document.getElementById('messages');
      // messagesDiv.innerHTML += `<div><b>You:</b> ${message}</div>`;
      
      // Clear input
      // document.getElementById('user-input').value = '';

      // Update context with user message
      // context.push({role: 'user', content: message});
      addContext({role: 'user', content: message})

      // Send message and context to server
      const response = await axios.post('http://localhost:5000/get_reply', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              message: message,
              context: context
          })
      });

      const data = await response.data;
      setresdata(data)
      // Update context with agent reply
      // context.push({role: 'assistant', content: data.reply});
      addContext({role: 'assistant', content: data.reply})

      // Update UI with agent reply
      // messagesDiv.innerHTML += `<div><b>Agent:</b> ${data.reply}</div>`;
      // Auto scroll to bottom
      // messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  console.log(context);
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <Sidebar />
          <Card>
            <CardBody className="flex gap-2">
              <Input placeholder="Enter your requirement" onChange={(e)=>setuserin(e.target.value)}
              onKeyDown={(e)=>handleKeyDown(e)}
              endContent={
                <Button color="primary" onClick={(e)=>{
                  e.preventDefault()
                  sendMessage()
                }}>Enter</Button>

              } />
            </CardBody>
          </Card>
          <div className="flex flex-col lg:flex-row gap-6">
<Company/>
            <Chat context={context} />
          </div>
        </div>
      </div>
    </>
  );
}
