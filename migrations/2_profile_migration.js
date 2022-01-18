const ProfileMigration = artifacts.require("ProfilePayments");

module.exports = function (deployer) {
  deployer.deploy(ProfileMigration);
};
