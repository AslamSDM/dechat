// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract ERC20FORTOKENGATING is ERC20{
    uint256 MAX_SUPPLY = 100000 ;

    constructor() ERC20("ERC20FORTOKENGATING","TOKEN"){
        _mint(msg.sender,100000*10**18);
    }
    function transferto(address _to, uint _value)public returns(bool){
        _transfer(msg.sender,_to,_value);
        return true;
    }

}
