export default class Timer{

    constructor(dimensions){
        this.count = 60;
      }

    decrimentTimer(){
      setInterval(()=>{
        if (this.count > 0)this.count --;
        else{
          this.count = "GAME OVER"
          return true;
        }
      },1000)
      
    }

    checkGameOver(){
      if (this.count === 0) return true;
      else return false;
    }
    resetTimer(){
        this.count = 60;
    }
    draw(ctx){
      ctx.font = "30px Calibri"
      ctx.fillText(`Time left: ${this.count}`, 30, 120)
    }

    update(){
    }
    animate(ctx){
      this.update()
      this.draw(ctx)
    }
  }