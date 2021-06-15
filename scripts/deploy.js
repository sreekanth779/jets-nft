// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  // NFT contract to deploy
  const NftJet = await hre.ethers.getContractFactory("NonFungibleJets");
  const nftJet = await NftJet.deploy("NonFungiblejets","NFTJ","http://NonFungiblejets.com/");
  await nftJet.deployed();
  console.log("NFT deployed to:", nftJet.address);
  // await nftJet.mint(nftJet.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
