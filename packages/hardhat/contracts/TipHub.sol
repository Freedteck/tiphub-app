// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title TipHub - Developer Resource Sharing Platform MVP
contract TipHub {
    /// @notice Resource structure for shared content
    struct Resource {
        address contributor;    // Creator of the resource
        string contentHash;     // IPFS/content identifier
        uint256 tipsReceived;   // Total USDe tips received
        uint256 createdAt;      // Timestamp of resource creation
        uint256 viewCount;      // Number of times resource viewed
    }

    /// @notice Stores all resources
    Resource[] public resources;

    /// @notice Tracks resources per user
    mapping(address => uint256[]) public userResources;

    /// @notice Tracks total tips received by each contributor
    mapping(address => uint256) public totalTipsReceived;

    /// @notice USDe token contract interface
    IERC20 public immutable usdeToken;

    /// @notice Platform purchase link for USDe
    string public constant USDE_PURCHASE_LINK = "https://app.sommelier.finance/";

    /// @notice Minimum tip amount
    uint256 public constant MIN_TIP_AMOUNT = 0.1 * 10**18; // 0.1 USDe

    /// @notice Events for platform interactions
    event ResourceShared(
        uint256 indexed resourceId, 
        address indexed contributor, 
        string contentHash
    );

    event ResourceTipped(
        uint256 indexed resourceId,
        address indexed tipper,
        address indexed contributor,
        uint256 tipAmount
    );

    event ResourceViewed(
        uint256 indexed resourceId,
        address indexed viewer
    );

    /// @notice Constructor sets the USDe token address
    /// @param _usdeTokenAddress Address of the USDe token contract
    constructor(address _usdeTokenAddress) {
        require(_usdeTokenAddress != address(0), "Invalid USDe token address");
        usdeToken = IERC20(_usdeTokenAddress);
    }

    /// @notice Share a new developer resource
    /// @param _contentHash IPFS hash or content identifier
    function shareResource(string calldata _contentHash) external {
        require(bytes(_contentHash).length > 0, "Content hash cannot be empty");

        // Create new resource
        resources.push(Resource({
            contributor: msg.sender,
            contentHash: _contentHash,
            tipsReceived: 0,
            createdAt: block.timestamp,
            viewCount: 0
        }));

        // Track user's resources
        uint256 newResourceId = resources.length - 1;
        userResources[msg.sender].push(newResourceId);

        emit ResourceShared(newResourceId, msg.sender, _contentHash);
    }

    /// @notice Tip a resource using USDe
    /// @param _resourceId ID of the resource to tip
    /// @param _amount Amount of USDe to tip
    function tipResource(uint256 _resourceId, uint256 _amount) external {
        require(_resourceId < resources.length, "Invalid resource ID");
        Resource storage resource = resources[_resourceId];
        
        require(resource.contributor != msg.sender, "Cannot tip own resource");
        require(_amount >= MIN_TIP_AMOUNT, "Tip amount too low");

        // Transfer USDe from tipper to resource contributor
        require(
            usdeToken.transferFrom(msg.sender, resource.contributor, _amount),
            "USDe transfer failed"
        );

        // Update tip tracking
        resource.tipsReceived += _amount;
        totalTipsReceived[resource.contributor] += _amount;

        emit ResourceTipped(_resourceId, msg.sender, resource.contributor, _amount);
    }

    /// @notice Record a resource view
    /// @param _resourceId ID of the resource viewed
    function viewResource(uint256 _resourceId) external {
        require(_resourceId < resources.length, "Invalid resource ID");
        Resource storage resource = resources[_resourceId];
        resource.viewCount++;

        emit ResourceViewed(_resourceId, msg.sender);
    }

    /// @notice Retrieve purchase link for USDe
    /// @return Link to purchase USDe tokens
    function getUSDePurchaseLink() external pure returns (string memory) {
        return USDE_PURCHASE_LINK;
    }

    /// @notice Retrieve all resources shared by a user
    /// @param _user Address of the user
    /// @return Array of resource IDs
    function getUserResources(address _user) external view returns (uint256[] memory) {
        return userResources[_user];
    }

    /// @notice Get top contributors based on tips received
    /// @param _limit Number of top contributors to return
    /// @return contributors Array of top contributor addresses
    /// @return tips Corresponding array of total tips received
    function getTopContributors(uint8 _limit) external view returns (
        address[] memory contributors,
        uint256[] memory tips
    ) {
        uint256 limit = _limit > 100 ? 100 : _limit;
        contributors = new address[](limit);
        tips = new uint256[](limit);

        // Simple selection of top contributors
        for (uint256 i = 0; i < resources.length; i++) {
            address contributor = resources[i].contributor;
            uint256 contributorTips = totalTipsReceived[contributor];

            // Find placement in top contributors
            for (uint256 j = 0; j < limit; j++) {
                if (tips[j] < contributorTips) {
                    // Shift existing entries
                    for (uint256 k = limit - 1; k > j; k--) {
                        tips[k] = tips[k-1];
                        contributors[k] = contributors[k-1];
                    }
                    
                    // Insert new top contributor
                    tips[j] = contributorTips;
                    contributors[j] = contributor;
                    break;
                }
            }
        }
    }

    /// @notice Get total number of resources on the platform
    function getTotalResources() external view returns (uint256) {
        return resources.length;
    }
}