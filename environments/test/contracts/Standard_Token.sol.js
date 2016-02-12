// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

var contract_data = {
  abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_total","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_initial_amount","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}],
  binary: "6060604052604051602080610337833950608060405251600160a060020a03331660009081526020819052604090208190556002819055506102f2806100456000396000f3606060405236156100565760e060020a6000350463095ea7b3811461005857806318160ddd146100c357806323b872dd146100d157806370a0823114610207578063a9059cbb14610227578063dd62ed3e146102b9575b005b6100c760043560243533600160a060020a03908116600081815260016020908152604080832094871680845294825282208590556060858152919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259190a35060015b92915050565b6002545b6060908152602090f35b6100c7600435602435604435600160a060020a038316600090815260208190526040812054829010801590610124575060016020908152604080832033600160a060020a03168452909152812054829010155b80156101305750600082115b1561020057600160a060020a03808416808352602083815260408420805486019055606085815291928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3816000600050600086600160a060020a03168152602001908152602001600020600082828250540392505081905550816001600050600086600160a060020a03168152602001908152602001600020600050600033600160a060020a03168152602001908152602001600020600082828250540392505081905550600190505b9392505050565b600160a060020a03600435166000908152602081905260409020546100c7565b6100c760043560243533600160a060020a03166000908152602081905260408120548290108015906102595750600082115b156102ed57604080822080548490039055600160a060020a03808516808452918320805485019055606084815233909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a35060016100bd565b6100c7600435602435600160a060020a038083166000908152600160209081526040808320938516835292905220546100bd565b6100bd56",
  address: "0xa70a9eaca9a576d598158b289270e184524cc65a",
  generated_with: "2.0.2",
  contract_name: "Standard_Token"
};

function Contract() {
  if (Contract.Pudding == null) {
    throw new Error("Standard_Token error: Please call load() first before creating new instance of this contract.");
  }

  Contract.Pudding.apply(this, arguments);
};

Contract.load = function(Pudding) {
  Contract.Pudding = Pudding;

  Pudding.whisk(contract_data, Contract);

  // Return itself for backwards compatibility.
  return Contract;
}

Contract.new = function() {
  if (Contract.Pudding == null) {
    throw new Error("Standard_Token error: Please call load() first before calling new().");
  }

  return Contract.Pudding.new.apply(Contract, arguments);
};

Contract.at = function() {
  if (Contract.Pudding == null) {
    throw new Error("Standard_Token error: lease call load() first before calling at().");
  }

  return Contract.Pudding.at.apply(Contract, arguments);
};

Contract.deployed = function() {
  if (Contract.Pudding == null) {
    throw new Error("Standard_Token error: Please call load() first before calling deployed().");
  }

  return Contract.Pudding.deployed.apply(Contract, arguments);
};

if (typeof module != "undefined" && typeof module.exports != "undefined") {
  module.exports = Contract;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Standard_Token = Contract;
}
