let slider;
let angle=0;
let tree=[];
function setup() {
    createCanvas(1300,700);
    slider = createSlider(0, PI/2, PI/10, 0.01)
    angle = PI/10;

    Callme(15);
}

function Callme(recursions){
    tree = [];
    let a = createVector(width/2, height);
    let b = createVector(width/2, height-100);
    var root = new Branch(a,b,0);
    tree[0] = root;
    fractal(tree[0], 0, recursions);
}

function fractal(curr, level_start, level_end){
    if(level_start == level_end) return;
    else{
        let r = curr.createRight(angle);
        let l = curr.createLeft(angle);
        // setCol(r);
        // setCol(l);
        tree.push(r);
        fractal(r, curr.level, level_end);
        tree.push(l);
        fractal(l, curr.level, level_end);
    }
}

function setCol(branch){    //redundant function
    branch.col.r = (branch.col.r+15)%256;
    branch.col.g = (branch.col.g)%256;
    branch.col.b = (branch.col.b)%256;
    branch.col.a = (branch.col.a-200);
}


function draw() {
    background(255);
    angle = slider.value();
    //Callme here for lower recursion values and use the slider

    for(let i=0;i<tree.length;i++){
        tree[i].show();
    }
}

function mousePressed(){

}
