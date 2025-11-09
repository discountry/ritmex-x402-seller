import { paymentMiddleware, Network } from 'x402-next';
// import { facilitator } from "@coinbase/x402"; // For mainnet

// Configure the payment middleware
export const proxy = paymentMiddleware(
  process.env.X402_RECEIVING_WALLET_ADDRESS as `0x${string}` || '', // your receiving wallet address
  {  // Route configurations for protected endpoints
    '/protected': {
      price: '$0.01',
      network: "solana-devnet", // for mainnet, see Running on Mainnet section
      config: {
        description: 'Access to protected content',
        // Optional: Add schemas for better discovery
        
      }
    },
    '/protected/api/date': {
      price: '$0.01',
      network: "base-sepolia", // for mainnet, see Running on Mainnet section
      config: {
        description: 'Access to paid date API',
        // Optional: Add schemas for better discovery
      }
    },
    '/protected/video': {
      price: '$0.01',
      network: "base-sepolia", // for mainnet, see Running on Mainnet section
      config: {
        description: 'Access to paid video',
      }
    },
  },
  {
    url: "https://facilitator.payai.network", // for testnet
  }
);

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/protected/:path*',
  ]
};