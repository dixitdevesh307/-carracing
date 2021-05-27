class Form{
    constructor(){
this.input=createInput("Name")
this.button=createButton("Play")
this.greeting=createGreeting("h3")

    }
hide(){
    this.greeting.hide( )
    this.button.hide()
    this.input.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("CAR RACING GAME")
        title.position(380,0)
        
        this.input.position(430,160)
        this.button.position(550,200)


        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            playerCount+=1
            player.updateCount(count)
            player.name=this.input.value()
            
            
            this.greeting.html("Hello "+ player.name )
            this.greeting.position(430,160)
            
        })
    }

}