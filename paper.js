class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			density:0.2,
			restitution:0.3		
			}
		this.body=Bodies.circle(x, y, r, options);
		this.r=r;
		this.image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
			var angle=this.body.angle;
			push()
			rotate(angle);
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}