from web3 import Web3, HTTPProvider, IPCProvider, WebsocketProvider,eth
import json

w3 = Web3(WebsocketProvider('ws://127.0.0.1:8546'))


print(w3.eth.accounts)
with open('abi.json','r') as reader:
    ABI = json.loads(reader.read())

Mycontract = w3.eth.contract(address='0x175D67e9c5aD0C712bd3173C0B4373E142E49Ed5',abi=ABI)

data = Mycontract.functions.creater().call()
print(data)
