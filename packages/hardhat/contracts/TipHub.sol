// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract TipHub {
    struct Resource {
        string title;
        string description;
        string link; // Optional
        address contributor;
        uint256 tipsReceived;
    }

    IERC20 public usdeToken; // USDe ERC-20 token
    Resource[] public resources;
    mapping(address => uint256) public tipsGiven;
    mapping(address => uint256) public tipsReceived;
    mapping(address => uint256[]) public userContributions;

    event ResourceAdded(
        uint256 indexed resourceId,
        address indexed contributor,
        string title,
        string description,
        string link
    );
    event TipSent(
        uint256 indexed resourceId,
        address indexed tipper,
        address indexed contributor,
        uint256 amount
    );

    constructor(address _usdeToken) {
        usdeToken = IERC20(_usdeToken);
    }

    // Add a new resource
    function addResource(
        string calldata _title,
        string calldata _description,
        string calldata _link
    ) external {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");

        // Allow empty link by skipping the `require` check

        resources.push(Resource({
            title: _title,
            description: _description,
            link: _link,
            contributor: msg.sender,
            tipsReceived: 0
        }));
        userContributions[msg.sender].push(resources.length - 1);

        emit ResourceAdded(resources.length - 1, msg.sender, _title, _description, _link);
    }

    // Tip a resource
    function tipResource(uint256 _resourceId, uint256 _amount) external {
        require(_resourceId < resources.length, "Invalid resource ID");
        require(_amount > 0, "Tip amount must be greater than zero");

        Resource storage resource = resources[_resourceId];
        require(resource.contributor != msg.sender, "Cannot tip your own resource");

        require(usdeToken.transferFrom(msg.sender, resource.contributor, _amount), "Token transfer failed");

        resource.tipsReceived += _amount;
        tipsGiven[msg.sender] += _amount;
        tipsReceived[resource.contributor] += _amount;

        emit TipSent(_resourceId, msg.sender, resource.contributor, _amount);
    }

    // Get user contributions
    function getUserContributions(address _user) external view returns (uint256[] memory) {
        return userContributions[_user];
    }

    // Get all resources
    function getAllResources() external view returns (Resource[] memory) {
        return resources;
    }

    // Get specific resource details
    function getResource(uint256 _resourceId) external view returns (string memory, string memory, string memory, address, uint256) {
        require(_resourceId < resources.length, "Invalid resource ID");
        Resource memory resource = resources[_resourceId];
        return (resource.title, resource.description, resource.link, resource.contributor, resource.tipsReceived);
    }
}
