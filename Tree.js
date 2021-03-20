class Tree {
    constructor(x, y) {
      this.x=x
      this.y=y
      this.treewidth=450
      this.treeheight=600
      this.treethickness=10
      this.body = Bodies.rectangle(this.x, this.y, this.treewidth, this.treethickness,{isStatic:true});
      this.image= loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y+10);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, -this.treeheight/2, this.treewidth, this.treeheight);
      pop();
    }
  };