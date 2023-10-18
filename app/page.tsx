"use client";
import { Chat } from "@/components/chat";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useContext } from "react";
import { SidebarContext } from "./providers";
import Sidebar from "@/components/sidebar";
import Company from "@/components/companu";
export default function Home() {
  const { isSidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  console.log(isSidebarVisible);
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <Sidebar />
          <Card>
            <CardBody>
              <Input placeholder="Enter your requirement" />
            </CardBody>
          </Card>
          <div className="flex gap-6">
<Company/>
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}
