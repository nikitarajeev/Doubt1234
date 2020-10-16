class Particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(x, y, this.r, options);
        this.color = color (random (0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(this.color)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
