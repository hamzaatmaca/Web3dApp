const getBalanceValue = async (web3)=>{
	const balance = await web3.eth.getBalance(process.env.ID)
	const ether = web3.utils.fromWei(balance,"ether" ) + "BNB"
	return ether
}

export default getBalanceValue