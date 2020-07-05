 
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  //ws
  web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8546"));
}

const keccak256 = (string)=>{ return web3.utils.keccak256(string)};


web3.eth.personal.unlockAccount('0x18f4024FbD6AbdDA9CA4832ce2Af2C41631573d2',"node1");

let Mycontract = new web3.eth.Contract(ABI,'0xd9c172e1223fCAe8Ad864A310b1Dc3caB8b703aE');


const options = {
    from:'0x18f4024FbD6AbdDA9CA4832ce2Af2C41631573d2' ,
    gas: 1500000,
    gasPrice: '0x1B48EB57E000',
};

async function deploy(){
    var data = await Mycontract.deploy({
        data: byteCode.object ,

    })


        .send({
        from: '0x18f4024FbD6AbdDA9CA4832ce2Af2C41631573d2',
        gas: 2100000,
        gasprice: '0x1B48EB57E000', //base10 30000000000000
    })
       // console.log(data.options.address);
       // console.log(data);
	return data;

}

async function getVoteData(len){
    let VoteData = await Mycontract.methods.getVoteData(len).call();
    console.log(VoteData);
    return VoteData;
}

async function addCandiate(name,party,num){
    let result = await Mycontract.methods.addCandidate(name,party,num).send(options);
    console.log(result);
    let index = result.events.CandidateAdd.returnValues.index;
    console.log(index);
    return index;
}

async function CandidateNum(){
    let num = await Mycontract.methods.CandidateNum().call();
    return num;
}

async function Candidations(num){
    let name = await Mycontract.methods.Candidations(num).call();
    return name;
}

async function nextState(){
    let result = await Mycontract.methods.nextState().send(options);

}

async function checkState(){
    let state = await Mycontract.methods.checkState().call();
    console.log(state);
    return state;
}
async function getCandidate(index){
    let data = await Mycontract.methods.getCandidate(index).call();
    let Candidate ={
        "name":data.name,
        "party":data.party,
        "num":data.num
    }
    //console.log(Candidate);
    return Candidate;
}
async function CandidateNum(){
    let num = await Mycontract.methods.CandidateNum().call();
    return num;
}
async function newVote(){
    let newVoting = await deploy();
    Mycontract = new web3.eth.Contract(ABI,newVoting.options.address);
    console.log(Mycontract.options.address);
}


async function callData(){

    var length = await Mycontract.methods.checkLength().call();
    var sha256 = await Mycontract.methods.sha256Value('0x1').call();
    console.log(length);
    console.log(sha256);


}

async function keccak256Value(data){
    var hash = await Mycontract.methods.keccak256Value(data).call();
    return hash;
}

async function voting(hashValue){
    var vote = await Mycontract.methods.voting(hashValue).send(options);
   // var index= await votingIndex();
    var index = vote.events.votingIndex.returnValues.index;
    console.log(index);
    return index;
}

function votingIndex(){
    return new Promise((resolve,reject)=>{
        Mycontract.events.votingIndex(function(error, event){
            if(error){
                reject(error);
            }else{
                resolve(event.returnValues.index);
            }
        });
    })
}



async function vertifing(kData,index){
    var vertify = await Mycontract.methods.vertifyKeccak256(kData,index).send(options);
    console.log(vertify);
   // var result = await vertifyResult();
    var result = vertify.events.vertifyResult.returnValues.result;
    console.log(result);
    //  vertifySha256
}
function vertifyResult(){
    return new Promise((resolve,reject)=>{
        Mycontract.events.vertifyResult(function(error,event){
            if(error){
                reject(error);
            }else{
                resolve(event.returnValues.result);
            }
        });
    })
}


