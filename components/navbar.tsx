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

export const Navbar = () => {
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
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit">Dechat</p>
					</NextLink>
				</NavbarBrand>
	
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">

					<ThemeSwitch />
<ConnectButton/>

				</NavbarItem>

			</NavbarContent>

	
		</NextUINavbar>
	);
};
