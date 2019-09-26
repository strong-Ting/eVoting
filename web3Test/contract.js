 
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

const Mycontract = new web3.eth.Contract(ABI,'0x4A521CBD7Dd69a4Cd2957Dd7bA4CCc2a320aAdE7');

async function deploy(){
    var data = await Mycontract.deploy({
        data: byteCode.object ,

    })


        .send({
        from: '0x18f4024FbD6AbdDA9CA4832ce2Af2C41631573d2',
        gas: 1500000,
        gasprice: '0x1B48EB57E000', //base10 30000000000000
    })
        console.log(data.options.address);
	return data;

}




const options = {
  from:'0x18f4024FbD6AbdDA9CA4832ce2Af2C41631573d2' ,
  gas: 1500000,
  gasPrice: '0x1B48EB57E000',
};

async function callData(){

    var length = await Mycontract.methods.checkLength().call();
    var sha256 = await Mycontract.methods.sha256Value('0x1').call();
    console.log(length);
    console.log(sha256);


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

//callData()
/*
Mycontract.methods.voting('0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2').send(options,(err,hash)=>{

    if(err){
        console.log(err);
    }
    console.log(hash);
}).then((r)=>{console.log(r);})*/
