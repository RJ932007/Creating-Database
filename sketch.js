var ball;
var database;
var pos;

function setup(){
    createCanvas(500,500);

    database=firebase.database();

    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //var ballRef=database.ref('Ball/Position');
    //ballRef.on("value",readPosition);

    database.ref('Ball/Position').on("value",(data)=>{
        pos=data.val();
        ball.x=pos.x;
        ball.y=pos.y
    })

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/Position').set({
        x:pos.x+x,
        y:pos.y+y
    })
}

/*function readPosition(data){
    pos=data.val();
    ball.x=pos.x;
    ball.y=pos.y;
}*/