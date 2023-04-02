const hre = require("hardhat");

async function main() {
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const HelloWorld_ = await HelloWorld.deploy("This is first message");

  await HelloWorld_.deployed();

  console.log(
    `Contract Address: ${HelloWorld_.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
