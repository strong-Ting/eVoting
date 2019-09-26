var ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "kData",
				"type": "bytes"
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
		"constant": false,
		"inputs": [
			{
				"name": "kData",
				"type": "bytes"
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
				"type": "bytes"
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
		"inputs": [
			{
				"name": "data",
				"type": "bytes"
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
				"name": "data",
				"type": "bytes"
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
	}
]