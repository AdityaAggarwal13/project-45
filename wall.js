class Wall{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
    density:11,
    friction:0.4,
    restitution:0.04
        }
       
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    
    }
    display()
    {
        var angle=this.body.angle;
        push()
    translate(this.body.position.x,this.body.position.y);
    rotate (angle);
    strokeWeight (4);
    stroke ("dark brown");
    rectMode (CENTER);
    fill ("brown");
    rect (0,0,this.width,this.height);
    pop ()
    
    }
    
    
    
    
    }