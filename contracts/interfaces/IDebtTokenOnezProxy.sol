// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IDebtTokenOnezProxy {
    function burn(address _account, uint256 _amount) external;

    function burnWithGasCompensation(
        address _account,
        uint256 _amount
    ) external returns (bool);

    function enableTroveManager(address _troveManager) external;

    function mint(address _account, uint256 _amount) external;

    function mintWithGasCompensation(
        address _account,
        uint256 _amount
    ) external returns (bool);

    function returnFromPool(
        address _poolAddress,
        address _receiver,
        uint256 _amount
    ) external;

    function sendToSP(address _sender, uint256 _amount) external;

    function DEBT_GAS_COMPENSATION() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function underlying() external view returns (IERC20);

    function borrowerOperationsAddress() external view returns (address);

    function factory() external view returns (address);

    function gasPool() external view returns (address);

    function troveManager(address) external view returns (bool);
}
