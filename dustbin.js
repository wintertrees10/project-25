class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.image=loadImage('dustbin.png');
		this.dustbinWidth=150;
		this.dustbinHeight=150;
		
		this.body=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight);
		
		World.add(world,this.body);

	}
	display()
	{
		
			var posLeft=this.body.position;
			var angle=this.body.angle;
			

			push();
			translate(posLeft.x, posLeft.y);
			rotate(angle);
			imageMode(CENTER);
			image(this.image,0,0,this.dustbinWidth, this.dustbinHeight);
			pop();

			
	}

}