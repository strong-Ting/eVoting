var ABI =[
	{
		"constant": false,
		"inputs": [],
		"name": "nextState",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"name": "checkData",
		"outputs": [
			{
				"name": "returnData",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"name": "getCandidate",
		"outputs": [
			{
				"components": [
					{
						"name": "num",
						"type": "uint256"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "party",
						"type": "string"
					}
				],
				"name": "Data",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Name",
				"type": "string"
			},
			{
				"name": "Party",
				"type": "string"
			},
			{
				"name": "Num",
				"type": "uint256"
			}
		],
		"name": "addCandidate",
		"outputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"name": "checkHash",
		"outputs": [
			{
				"name": "returnData",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"name": "checkVertify",
		"outputs": [
			{
				"name": "returnData",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creater",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "data",
				"type": "string"
			}
		],
		"name": "keccak256Value",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"name": "getVoteData",
		"outputs": [
			{
				"components": [
					{
						"name": "kDataHash",
						"type": "bytes32"
					},
					{
						"name": "kData",
						"type": "string"
					},
					{
						"name": "vertifyResult",
						"type": "uint8"
					}
				],
				"name": "VoteData",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "kData",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "vertifySha256",
		"outputs": [
			{
				"name": "result",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CandidateNum",
		"outputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkState",
		"outputs": [
			{
				"name": "state",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "kData",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "vertifyKeccak256",
		"outputs": [
			{
				"name": "result",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkLength",
		"outputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hashValue",
				"type": "bytes32"
			}
		],
		"name": "voting",
		"outputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "data",
				"type": "string"
			}
		],
		"name": "sha256Value",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "votingIndex",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "result",
				"type": "bool"
			}
		],
		"name": "vertifyResult",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "CandidateAdd",
		"type": "event"
	}
]