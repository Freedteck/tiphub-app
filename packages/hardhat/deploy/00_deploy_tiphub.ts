import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployTipHub: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Assuming USDe token address is known - replace with actual address
  const USDE_TOKEN_ADDRESS = "0xf805ce4F96e0EdD6f0b6cd4be22B34b92373d696"; 

  await deploy("TipHub", {
    from: deployer,
    args: [USDE_TOKEN_ADDRESS], // Pass USDe token address to constructor
    log: true,
    autoMine: true,
  });

  // Optional: Additional setup or logging
  const tipHub = await hre.ethers.getContract<Contract>("TipHub", deployer);
};

export default deployTipHub;
deployTipHub.tags = ["TipHub"];

packages/nextjs/app/blockexplorer/_components/AddressCodeTab.tsx