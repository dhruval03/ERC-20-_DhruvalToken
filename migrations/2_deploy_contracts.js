var DhruvalToken = artifacts.require("./DhruvalToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DhruvalToken, 1000000);
};