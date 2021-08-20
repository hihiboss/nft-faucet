async function main() {
    const CobyNFT = await ethers.getContractFactory("CobyNFT")

    // Start deployment, returning a promise that resolves to a contract object
    const cobyNFT = await CobyNFT.deploy()
    console.log("Contract deployed to address:", cobyNFT.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
