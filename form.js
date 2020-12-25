class Form {
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Car racing game")
        title.position(130,0)
        var inputBox=createInput("name")
        inputBox.position(130,160)
        var loginButton=createButton('Play')
        loginButton.position(250,200)
        var greeting=createElement('h3')
        
        loginButton.mousePressed(function (){
            inputBox.hide()
            loginButton.hide()
            var name=inputBox.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hi "+name)
            greeting.position(130,160)
        })
    }
}