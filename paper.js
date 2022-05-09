class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		
			};
		this.x=x;
		this.y=y;
		this.r=r;
		this.pic = loadImage("paper.png");
		this.body=Bodies.rectangle(this.x, this.y, this.r/2,this.r/2,options);
		World.add(world, this.body);
	
		

	}
	display()
	{
			
			var paperpos=this.body.position;		
            paperpos.x = this.x;
			paperpos.y=this.y;
			push();
			translate(paperpos.x, paperpos.y);
			imageMode("centre");
			image(this.pic,0,0,this.r/2,this.r/2);
			pop();
			
	}

}