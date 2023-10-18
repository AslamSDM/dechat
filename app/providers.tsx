"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
} from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public';
// import { SidebarContext } from "@/components/sidebarcontext";
import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface SidebarContextProps {
  isSidebarVisible: boolean;
  setSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<any>(undefined);


export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

const { chains, publicClient } = configureChains(
    [mainnet],
    [
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'Devchat App',
    projectId: '0ef4f83694afe12e4c1de4079c363af7',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })

export function Providers({ children, themeProps }: ProvidersProps) {
	const [isSidebarVisible,setSidebarVisible] = useState(false)
	return (
		<WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          modalSize="compact"
          >
		<NextUIProvider>
			<NextThemesProvider {...themeProps}>
			<SidebarContext.Provider value={{isSidebarVisible, setSidebarVisible}}>

				{children}
			</SidebarContext.Provider>
				</NextThemesProvider>
		</NextUIProvider>
		</RainbowKitProvider>
      </WagmiConfig>
	);
}
