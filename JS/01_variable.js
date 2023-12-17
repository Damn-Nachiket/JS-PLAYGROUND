const accountId = 14433
let accountEmail = "nachi@gmail.com"
var accountPassword = "12345"

console.log(accountId)
//This method isss useful when you want to run one variable

console.table([accountId , accountEmail , accountPassword])
//.table method is useful when you want to run multiple variable

/*Notes
    ~Let is used in JS instead of Var because it resolves the scope problem of JS.

    ~Prefer not to use Var because of issue in 
    block scope & functional scope
*/