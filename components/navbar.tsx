"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { useContext } from "react";
import { SidebarContext } from "@/app/providers";
import { Button } from "@nextui-org/button";
export function Navbar(){
const sidebarcontext = useContext(SidebarContext);
const {isSidebarVisible,setSidebarVisible } = sidebarcontext

const handleClick= ()=>{
	console.log(isSidebarVisible)
}
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit">Dechat</p>
					</NextLink>
				</NavbarBrand>
	
			</NavbarContent>

			<NavbarContent
				className=" sm:flex basis-1/5 sm:basis-full gap-4"
				justify="end"
			>
				<NavbarItem>

					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem>

<Button onClick={()=>	setSidebarVisible(!isSidebarVisible)
}>My Bots</Button>
</NavbarItem>
				<NavbarItem>
<ConnectButton/>

				</NavbarItem>

			</NavbarContent>

	
		</NextUINavbar>
	);
};
