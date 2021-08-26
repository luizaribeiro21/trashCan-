class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false, 
            'restituition': 0.3,
            'friction':0,
            'density':1.2			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        
		this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			//fill(128,128,128)
			image(this.image, 0,0,this.w, this.h);
			pop()
			
	}

}