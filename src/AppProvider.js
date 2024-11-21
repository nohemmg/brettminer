import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import React, { useState, useEffect } from "react";
import "./AppProvider.css"; // Assurez-vous que ce fichier est bien importé
import App from "./App";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function AppProvider() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale="zh-En"
          theme={lightTheme({
            accentColor: "#0553F7",
            accentColorForeground: "white",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <div style={{ display: "flex", justifyContent: "flex-start"}}>
          <App /></div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default AppProvider;
