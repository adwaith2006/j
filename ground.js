class Ground{
    constructor(x,y,width,height){
   this.ground=createSprite(x,y,width,height);
   this.image=loadImage("img/g1.png");
    }

  display(){
this.ground.velocityX=-7;
if(this.ground.x<0){
this.ground.x=this.ground.width/2;
this.ground.addImage("ground",this.image);
}
  }
}