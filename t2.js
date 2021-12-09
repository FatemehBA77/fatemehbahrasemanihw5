function bigNumber(){
    for(let value in arguments ){
        let type=typeof arguments[value]
        if( type === "string" ) {
            arguments[value]=arguments[value].Number()
            arguments[value]=arguments[value].bigInt()
        } 
        if(arguments[value] === null && type === "string" ){
            throw new Error(" input string empty")
        }
        if(arguments[value] === 0){
            return arguments[value].bigInt()
        }
        if (type === "bigint") {
            arguments.sort();
        }
        arguments.sort()
    }
    return arguments[0]
}
console.log(bigNumber(10n, 20n, "10n"))