/** Change these values to configure the application for your own use. **/

import { ConfluxEspace } from "@thirdweb-dev/chains";

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
export const contractConst = "0xC33c75D6Ae05867517Dcb0D4a78aeF2eF310BD68";

// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
export const chainConst = ConfluxEspace

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra
export const clientIdConst = import.meta.env.VITE_TEMPLATE_CLIENT_ID || "0b0c7f5e3aa91b89a268b5d00e0bbcca";
//peque
// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
