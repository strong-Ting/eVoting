pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;

contract eVoting{
    
  

  address public creater = msg.sender;
  
  enum State{
      prepare,
      voting,
      vertify,
      finish
  }
  State VoteState =State.prepare; // 0 == voteBefore , 1 == voting ,2 == vertify ,3 == finish
  
  struct EachUpdate{
    bytes32 kDataHash;
    string kData;
    uint8 vertifyResult; //0 == false , 1 == true ,2 == unVertify
  }
  
  struct Candidate{
      uint256 num;
      string name;
      string party;
  }
  
  Candidate[] Candidations;
  EachUpdate[] votingMachine;
  
  event votingIndex(uint256 index);    
  event vertifyResult(bool result);
  event CandidateAdd(Candidate data);
  
  modifier onlyCreater{
      require(msg.sender == creater);
      _;
  }
  modifier stateCheck(State _state){
      require(_state == VoteState);
      _;
  }
  
  function nextState() onlyCreater public {
      require(VoteState != State.finish);
      VoteState = State(uint(VoteState) + 1);
      
  }
 
  function addCandidate(string memory Name,string memory Party,uint256  Num) stateCheck(State.prepare) onlyCreater public returns(uint256 index/*Candidate  memory CandidateData*/){
    index = Candidations.push(
          Candidate({
              name:Name,
              num:Num,
              party:Party
    }))-1;
    //CandidateData = Candidations[index];
    //emit CandidateAdd(CandidateData);
  }
  
  function voting(bytes32 hashValue)stateCheck(State.voting) public returns(uint256 index){
    index = votingMachine.push(
      EachUpdate({
        kDataHash: hashValue,
        kData: '',
        vertifyResult: 2
      })) -1;
      
    emit votingIndex(index);
  }

  function vertifySha256(string memory kData,uint index) stateCheck(State.vertify) public returns(bool result){
      require(votingMachine[index].vertifyResult == 2);
      votingMachine[index].kData = kData;
      
      if(sha256(abi.encode(kData)) == votingMachine[index].kDataHash){
          votingMachine[index].vertifyResult = 1;
          result =  true;
      }else{
          votingMachine[index].vertifyResult = 0;
          result =  false;
      }
      
      emit vertifyResult(result);
  }

  
  function vertifyKeccak256(string memory kData,uint index) stateCheck(State.vertify) public returns(bool result){
      require(votingMachine[index].vertifyResult == 2);
      votingMachine[index].kData = kData;
      if(keccak256(abi.encode(kData)) == votingMachine[index].kDataHash){
          votingMachine[index].vertifyResult = 1;
          result = true;
      }else{
          votingMachine[index].vertifyResult = 0;
          result = false;
      }
      emit vertifyResult(result);
  }
  
  function sha256Value(string memory data)public pure returns(bytes32){
      return sha256(abi.encode(data));
  }
  function keccak256Value(string memory data)public pure returns(bytes32){
      return keccak256(abi.encode(data));
  }


  function checkHash(uint len)public view returns(bytes32 returnData){
    return votingMachine[len].kDataHash;
  }
  
  function checkData(uint len)public view returns(string memory returnData){
    return votingMachine[len].kData;
  }
  
  function checkVertify(uint len)public view returns(uint8 returnData){
    return votingMachine[len].vertifyResult;
  }


  function checkLength()public view returns(uint len){
      return votingMachine.length;
  }
  function checkState()public view returns(State state){
      return VoteState;
  }
  function getVoteData(uint len)public view returns(EachUpdate memory VoteData){
      return votingMachine[len];
  }
  function getCandidate(uint len)public view returns(Candidate memory Data){
      return Candidations[len];
  }
  function CandidateNum()public view returns(uint len){
      return Candidations.length;
  }
  
  
}
