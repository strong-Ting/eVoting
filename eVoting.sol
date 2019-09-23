pragma solidity ^0.5.3;

contract eVoting{
    
  event votingIndex(uint256 index);    
  event vertifyResult(bool result);
  
  struct EachUpdate{
    bytes32 kDataHash;
    bytes kData;
    uint8 vertifyResult; //0 == false , 1 == true ,2 == unVertify
  }

  EachUpdate[] votingMachine;

  function voting(bytes32 hashValue)public returns(uint256 index){
    index = votingMachine.push(
      EachUpdate({
        kDataHash: hashValue,
        kData: '',
        vertifyResult: 2
      })) -1;
      
    emit votingIndex(index);
  }

  function vertifySha256(bytes memory kData,uint index)public returns(bool result){
      votingMachine[index].kData = kData;
      if(sha256(kData) == votingMachine[index].kDataHash){
          votingMachine[index].vertifyResult = 1;
          result =  true;
      }else{
          votingMachine[index].vertifyResult = 0;
          result =  false;
      }
      emit vertifyResult(result);
  }

  
  function vertifyKeccak256(bytes memory kData,uint index)public returns(bool result){
      votingMachine[index].kData = kData;
      if(keccak256(kData) == votingMachine[index].kDataHash){
          votingMachine[index].vertifyResult = 1;
          result = true;
      }else{
          votingMachine[index].vertifyResult = 0;
          result = false;
      }
      emit vertifyResult(result);
  }
  

  function sha256Value(bytes memory data)public pure returns(bytes32){
      return sha256(data);
  }
  function keccak256Value(bytes memory data)public pure returns(bytes32){
      return keccak256(data);
  }


  function checkHash(uint len)public view returns(bytes32 returnData){
    return votingMachine[len].kDataHash;
  }
  
  function checkData(uint len)public view returns(bytes memory returnData){
    return votingMachine[len].kData;
  }
  
  function checkVertify(uint len)public view returns(uint8 returnData){
    return votingMachine[len].vertifyResult;
  }


  function checkLength()public view returns(uint len){
      return votingMachine.length;
  }
 
}


