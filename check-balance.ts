import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
const publicKey = new PublicKey("31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5");

const connection = new Connection("https://api.mainnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
