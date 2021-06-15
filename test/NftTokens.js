const { expect } = require("chai");

describe("Token contract", function () {

  let Token;
  let nftToken;
  let owner;

  beforeEach(async function () {

    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("NonFungibleJets");
    nftToken = await Token.deploy("NonFungibleToken", "NFTJ", "http://NonFungibleToken.com/");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // console.log("Deploying the contracts with the account:",await owner.getAddress());
    await nftToken.deployed();
  });

  describe("NonFungibleJets", async function () {
    it("Should return the right name and symbol", async function () {

      expect(await nftToken.name()).to.equal("NonFungibleToken");
      expect(await nftToken.symbol()).to.equal("NFTJ");

      console.log("NonFungibleJets deployed to:", nftToken.address);

      const symbal1 = await nftToken.symbol();
      console.log("NonFungibleJets symbal:", symbal1);
    });
  });

  describe("mint NonFungibleJets", async function () {
    it("mint NonFungibleJets a address", async function () {

      await nftToken.mint(owner.getAddress());
      await nftToken.mint(owner.getAddress());
      await nftToken.mint(owner.getAddress());

    });
  });

  describe("Right Owner", function () {

    it("Should set the right owner", async function () {

      const ownerBalance = await nftToken.balanceOf(owner.getAddress());
      // const tokenOwner = await nftToken.ownerOf(0);
      // const baseURI = await nftToken.baseURI();
      // console.log("Base Uri ", tokenOwner)

      console.log("NonFungibleJets owner:", ownerBalance.toString());
      // console.log(" owner of :", tokenOwner.toString());
      console.log("tatal supply ", nftToken.totalSupply().toString());

    });

  });

});
