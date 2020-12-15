class GameObject {

	constructor(img, x, y){
		this.img = img;
		this.x = x;
		this.y = y;
		this.width = img.width;
		this.height = img.height;

		
	}
	
	draw(){
		image(this.img, this.x, this.y); 
	}

	collide(other){
		

		if (this.x - this.width/5 < other.x + other.width/5 &&
			this.x + this.width/5 > other.x - other.width/5 &&
			this.y - this.height/5 < other.y + other.height/5 &&
			this.y + this.height/5 > other.y + other.height/5 ) {
			return true;
		}	
			else {
				return false;
			}

		}

	}