const user={
    name:"sam",
    class:9,
    welcome:function(){
        console.log(`${this.username} is the username`)
    }
}
console.log(user.name)
user.welcome()
console.log(this)
user
//user.name="rita"
//user.welcome()