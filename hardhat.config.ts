import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'solidity-coverage'
import 'hardhat-deploy'
import 'hardhat-gas-reporter'
import 'hardhat-contract-sizer'
import 'dotenv/config'

const config: HardhatUserConfig = {
  solidity: '0.8.9',
}

export default config
