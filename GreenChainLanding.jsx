
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function GreenChainLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12 space-y-10">
      <header className="text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          GreenChain
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl">
          A Blockchain Architecture for Carbon Emission Tracking and Environmental Accountability
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Abstract</h2>
            <p>
              GreenChain is a blockchain-based solution for real-time carbon emission tracking and accountability.
              It integrates smart contracts, IoT data, and carbon credit systems to drive sustainability and regulatory compliance.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Real-time Emission Data via IoT Integration</li>
              <li>Smart Contract Automation for Audits</li>
              <li>Tokenized Carbon Credit System (GreenTokens)</li>
              <li>Transparent and Tamper-proof Ledger</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Architecture Overview</h2>
            <p>
              Built on a proof-of-stake blockchain, GreenChain utilizes IPFS for secure metadata storage,
              EVM-compatible smart contracts for compliance automation, and DID protocols for identity verification.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Corporate Emission Audits</li>
              <li>Decentralized Carbon Credit Marketplaces</li>
              <li>Supply Chain Sustainability Monitoring</li>
              <li>Governmental Climate Accountability</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Technology Stack</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Blockchain: Polygon PoS</li>
              <li>Smart Contracts: Solidity</li>
              <li>Storage: IPFS</li>
              <li>Identity: DIDs</li>
              <li>Frontend: React + Web3.js</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Vision</h2>
            <p>
              GreenChain aims to redefine how industries manage and report carbon footprints.
              By leveraging Web3, we enable scalable, decentralized, and secure environmental accountability.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-10">
        <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl text-lg">
          <a href="/downloads/greenchain-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
            Download Full Whitepaper (PDF)
          </a>
        </Button>
      </footer>
    </div>
  );
}
