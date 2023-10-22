"use client";
import { Chat } from "@/components/chat";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useContext, useState } from "react";
import { SidebarContext } from "./providers";
import Sidebar from "@/components/sidebar";
import Company from "@/components/companu";
import { Button } from "@nextui-org/button";
import axios from "axios";
import { data } from "autoprefixer";
import { useAccount } from "wagmi"
import { getChainId } from "viem/_types/actions/public/getChainId";
const {Web3} = require("web3")
const ScrollABI = require("./api/ABI/ScrollABI.json")
const zkevmABI= require("./api/ABI/zkevmABI.json")
const scrollWeb3 = new Web3("https://practical-orbital-pond.scroll-testnet.quiknode.pro/08905d23c6174a79fc6ca81e843800aece5fc731/")
const zkevmWeb3 = new Web3("https://damp-solitary-crater.zkevm-testnet.quiknode.pro/aca8d1a248929230dac74522b16e7f80ff52df47/")
const ScrollcontractAddress = "0xC649729Bfe8001da34714200dd22fE5f70E07B10"
const zkevmcontractAddress = "0x7Ad06f3c6aCf83667A555cE1Ff6f499797b522c7"
const chainID=1442
if (chainID==1442){
  const contract = new scrollWeb3.eth.Contract(zkevmABI,zkevmcontractAddress)
}
else if (chainID==534351){
  const contract = new zkevmWeb3.eth.Contract(ScrollABI,ScrollcontractAddress)
}




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

  async function getReply(req:any, res:any) {
    const { message, context } = req.body;
    const response = await fetch('http://127.0.0.1:5000/api/get_reply', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          message: message,
          context: context
      })
    });
    console.log(response)
    const data = await response.json();
    res.send(data);
  }

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
  addContext({ role: 'user', content: message })

    // Send message and context to server
    // const response = await axios.post('http://127.0.0.1:5000/api/get_reply/', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify({
    //       message: message,
    //       context: context
    //   })
    // });
    
    try {
      const response = await fetch('http://127.0.0.1:5000/api/get_reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: context
        })
      });
      const data = await response.json();
      console.log("data is ",data);
      addContext({role: 'assistant', content: data.reply})
    } catch (error) {
      console.log(error);
    } finally {
      console.log('finally');
    }
    
      // Update context with agent reply
      // context.push({role: 'assistant', content: data.reply});
  
      // console.log(data.reply)

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
