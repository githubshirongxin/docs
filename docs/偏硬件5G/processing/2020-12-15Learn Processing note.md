---
layout: post
title: 《Learning Processing - Daniel Shiffman》读书笔记
---

![](/docs/images/2020-12-15-21-33-55.png)

## -------------lession 1-------------

## 1, 像素
![](/docs/images/2020-12-16-09-20-06.png)
![](/docs/images/2020-12-16-09-20-42.png)
![](/docs/images/2020-12-16-09-21-10.png)
![](/docs/images/2020-12-16-09-22-39.png)
![](/docs/images/2020-12-16-09-23-30.png)
![](/docs/images/2020-12-16-09-25-10.png)
![](/docs/images/2020-12-16-09-26-42.png)

![](/docs/images/2020-12-16-09-27-04.png)
fill的第四个参数表示透明 0 -255 

自定义颜色范围，没啥意思，不用

## 2，processing P17
简单介绍IDE，略
 可以导出成java和applet程序。被web引用

## 3，Interaction P31

### 3.1 mouse位置
鼠标实时位置：mouseX，mouseY
之前的鼠标位置：pmouseX,pmouseY
```java
 void setup() {
 size(200,200);
 background(255);
 smooth();
 }
 void draw() {
 stroke(0);
 line(pmouseX ,pmouseY ,mouseX ,mouseY );
 } 
 ```
 `line(pmouseX ,pmouseY ,mouseX ,mouseY );`会一直不停地划线。
 ![](/docs/images/2020-12-16-09-55-24.png)

 ```
  void setup() {
 size(200,200);
 background(255);
 smooth();
 }
 void draw() {
 stroke(0);
 strokeWeight(abs(mouseX - pmouseX)); // 笔头粗细
 line(pmouseX ,pmouseY ,mouseX ,mouseY );
 } 
 ```
 ![](/docs/images/2020-12-16-09-58-11.png)

### 3.2 mouse click 和 key press
两个内嵌函数void mousePressed(), void keyPressed()
```java
 void setup() {
    size(200,200);
    background(255);
 }
 void draw() {
 }
void mousePressed() {
    stroke(0);
    fill(175);
    rectMode(CENTER);
    rect(mouseX,mouseY,16,16);
 }
 void keyPressed() {
    background(255);
 } 
 ```
 ![](/docs/images/2020-12-16-10-04-41.png)


 - 以mouseX,mouseY为中心画图形。
 - 以mouseX，mouseY为起点划线，以pmousex，pmouseY为终点。起到跟着鼠标晃动，带惯性效果。
 - 真棒
 ```java
 void setup() {
  // Set the size of the window
  size(200, 200);
  smooth(); // 画图形时抗锯齿。
  frameRate(30) ; // 1-60 每秒画面数
}
void draw() {
  // Draw a black background
  background(255); // 清掉之前的影像。要不然导出都是走动的痕迹。
  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER);
  // Draw Zoog's body
  stroke(0);
  fill(175);
  rect(mouseX, mouseY, 20, 100);
  // Draw Zoog's head
  stroke(0);
  fill(255);
  ellipse(mouseX, mouseY -30, 60, 60);

  // Draw Zoog's eyes
  fill(mouseX, 0, mouseY);
  ellipse(mouseX-19, mouseY-30, 16, 32);
  ellipse(mouseX + 19, mouseY-30, 16, 32);
  // Draw Zoog's legs
  stroke(0);
  line(mouseX-10, mouseY + 50, pmouseX-10, pmouseY + 60);
  line(mouseX + 10, mouseY + 50, pmouseX + 10, pmouseY + 60);
}
void mousePressed() {
  println( "Take me to your leader! ");
}

```
![](/docs/images/2020-12-16-10-19-13.png)

## lession1 总结
![](/docs/images/2020-12-16-10-20-46.png)
```java
void setup() {
  // Set the size of the window
  fullScreen();
  noStroke();
  colorMode(RGB,width);
 
  smooth();
  frameRate(30) ;
}
void draw() {
  // Draw a black background
  background(mouseX,  mouseY,pmouseY);
  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER);
  // Draw Zoog's body
  stroke(0);
  fill(175);
  rect(mouseX, mouseY, 20, 100);
  // Draw Zoog's head
  stroke(0);
  fill(255);
  ellipse(mouseX, mouseY -30, 60, 60);

  // Draw Zoog's eyes
  fill(mouseX, 0, mouseY);
  ellipse(mouseX-19, mouseY-30, 16, 32);
  ellipse(mouseX + 19, mouseY-30, 16, 32);
  // Draw Zoog's legs
  stroke(0);
  line(mouseX-10, mouseY + 50, pmouseX-10, pmouseY + 60);
  line(mouseX + 10, mouseY + 50, pmouseX + 10, pmouseY + 60);
}
void mousePressed() {
  println( "Take me to your leader! ");
}
```

---
## -------------Lession2-------------
## 4，Variables  P45

### 4.1 base
```java
void setup() {
  size(800, 600); 
  background(255);
  smooth();
  frameRate(30) ;

  float rad = PI/4;
  float deg = degrees(rad);
  println(rad + " radians is " + deg + " degrees"); 


  deg = 45.0;
  rad = radians(deg);
  println(deg + " degrees is " + rad + " radians");

  background(255, 255, 255);
  ellipseMode(CENTER);
  ellipse(400, 400, 30, 40);
  arc(50, 50, 80, 80, 0, PI+QUARTER_PI, CHORD);
  arc(150, 150, 80, 80, 0, PI+QUARTER_PI, PIE);
  arc(250, 250, 80, 80, 0, PI+QUARTER_PI, OPEN);
  
  circle(200, 400, 55);
  quad(38, 31, 86, 20, 69, 63, 30, 76);
  square(30, 20, 55);
  triangle(30, 75, 58, 20, 86, 75);
}

void draw() {
 
}

void mousePressed() {
}

```

### 4.2 练习4-3，速度随着鼠标变化

```java
int circleX = 0;
int circleY = 100;
void setup() {
  size(200, 200);
}
void draw() {
  background(255);
  stroke(0);
  fill(175);
  ellipse(circleX, circleY, 50, 50);
  float y = map(mouseX,0,width,1,10);
  circleX = circleX + (int(y));
  if( circleX >=240){
     circleX = 0; 
  }
} 
```

各个因素都随着变量而变化
```java
float circleFill = 0;
float backgroundColor = 255;
float change = 0.5;
// Your basic setup
void setup() {
  size(200, 200);
  smooth();
}

void draw() {
  // Draw the background and the ellipse
  background(backgroundColor);
  stroke(circleStroke);
  fill(circleFill);
  ellipse(circleX, circleY, circleW, circleH);
  // Change the values of all variables
  circleX = circleX + change;
  circleY = circleY + change;
  circleW = circleW + change;
  circleH = circleH - change;
  circleStroke = circleStroke - change;
  circleFill = circleFill + change;
}
```

### 4.3 exercise 4-4
```java
//4-4 exercise
int baseX = 150;
int baseY = 150;
int banjing = 50;
void setup(){
 size(500,500); 
 background(255,255,255);
 fill(127);
 stroke(0);
 
 
}
void draw(){
 background(255,255,255);
  
 circle(baseX,baseY,50);
 circle(baseX+100,baseY,50);
 circle(baseX,baseY+100,50);
 circle(baseX+100,baseY+100,50);
  
  baseX = baseX + int(random(-2,2));
  baseY = baseY + int(random(-2,2));
  if ( baseX >= 500 ) {
     baseX = 150 ;
     baseY = 150 ;
  }
   
}

```

### 4.5 系统变量
```
 • width—Width (in pixels) of sketch window.
 • height—Height (in pixels) of sketch window.
 • frameCount —Number of frames processed. 
 • frameRate—Rate that frames are processed (per second).
 • screen.width—Width (in pixels) of entire screen.
 • screen.height—Height (in pixels) of entire screen.
 • key—Most recent key pressed on the keyboard.
 • keyCode—Numeric code for key pressed on keyboard.
 • keyPressed—True or false? Is a key pressed?
 • mousePressed —True or false? Is the mouse pressed?
 • mouseButton —Which button is pressed? Left, right, or center? 
 ```

```java
void setup() {
  size(200, 200);
  frameRate(30);
}
void draw() {
  background(100);
  stroke(255);
  fill(frameCount/2);
  rectMode(CENTER);
  rect(width/2, height/2, mouseX + 10, mouseY + 10);
}
void keyPressed() {
  println(key);
} 

```


### example 4-8
```java
float zoogX;
float zoogY;
float eyeR;
float eyeG;
float eyeB;
void setup() {
  size(800, 800);
  zoogX = width/2; // Zoog always starts in the middle
  zoogY = height + 100; // Zoog starts below the screen
  smooth();
}
void draw() {
  background(255);
  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER);
  // Draw Zoog's body
  stroke(0);
  fill(150);
  rect(zoogX, zoogY, 20, 100);
  // Draw Zoog's head
  stroke(0);
  fill(255);
  ellipse(zoogX, zoogY - 30, 60, 60);
  // Draw Zoog's eyes ,眼睛颜色随机变化
  eyeR = random(255);
  eyeG = random(255);
  eyeB = random(255);
  fill(eyeR, eyeG, eyeB);
  ellipse(zoogX - 19, zoogY - 30, 16, 32);
  ellipse(zoogX + 19, zoogY - 30, 16, 32);
  // Draw Zoog's legs
  stroke(150);
  line(zoogX - 10, zoogY + 50, zoogX - 10, height);
  line(zoogX + 10, zoogY + 50, zoogX + 10, height);
  // Zoog moves up
  zoogY = zoogY - 1;
} 
```



## 5，Conditionals  P59
略
```java
float r = 0;
float b = 0;
float g = 0;
void setup() {
  size(200, 200);
}
void draw() {
  background(r, g, b);
  stroke(0);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  if (mouseX > width/2) {
    r = r + 1;
  } else {
    r = r - 1;
  }
  if (mouseY > height/2) {
    b = b + 1;
  } else {
    b = b - 1;
  }
  if (mousePressed) {
    g = g + 1;
  } else {
    g = g - 1;
  }
  r = constrain(r, 0, 255); // 把它限制在后面的范围。相当于截取
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
}
```

### 练习5-5 逻辑 && || ！
![](/docs/images/2020-12-16-14-02-57.png)
```java
void setup() {
  size(200, 200);
  
  stroke(0);
}
void draw() {
  background(255,255,255);
  line(0,height/2,width,height/2);
  line(width/2,0,width/2,height);
  
  fill(0);
  rectMode(CORNER);
  if(mouseX < width/2 && mouseY < height/2){
    rect(0,0,width/2,height/2);
  }else if (mouseX > width/2 && mouseY < height/2){
    rect(width/2,0,width,height/2);
  }else if (mouseX < width/2 && mouseY > height/2){
     rect(0,height/2,width/2,height);
  }else{
      rect(width/2,height/2,width,height);
  }
}
```
### boolean变量。mousePressed
![](/docs/images/2020-12-16-14-04-24.png)
```java
boolean button = false;
int x = 50;
int y = 50;
int w = 100;
int h = 75;
void setup() {
  size(200, 200);
}
void draw() {
  if (mouseX > x &&mouseX < x + w &&mouseY > y &&mouseY < y + h &&mousePressed) {
    button= true;
  } else {
    button= false;
  }
  if (button) {
    background(255);
    stroke(0);
  } else {
    background(0);
    stroke(255);
  }
  fill(175);
  rect(x, y, w, h);
} 
```

### example5-6 Bouncing ball
![](/docs/images/2020-12-16-14-09-52.png)
```java
int x =0;
int speed = 1;
void setup() {
  size(200, 200);
  smooth();
}
void draw() {
  background(255);
  x = x +speed;
  // 这样实现反弹球
  if ((x > width) || (x < 0)) {
    speed = speed * -1;
  }
  // Display circle at x location
  stroke(0);
  fill(175);
  ellipse(x, 100, 32, 32);
} 
```

### example5-7 Bouncing Color
```java
float c1 = 0;
float c2 = 255;
float c1dir = 0.1;
float c2dir = -0.1;
void setup() {
  size(200, 200);
}
void draw() {
  noStroke();
  // Draw rectangle on left
  fill(c1, 0, c2);
  rect(0, 0, 100, 200);
  // Draw rectangleonright
  fill(c2, 0, c1);
  rect(100, 0, 100, 200);
  // Adjust color values
  c1 = c1 + c1dir;
  c2 = c2+ c2dir;
  // Reverse direction of color change
  if (c1< 0 || c1 > 255) {
    c1dir *= -1;
  }
  if (c2< 0 || c2 > 255) {
    c2dir *= -1;
  }
} 
```

### example 5-8 走边小块
```java
int x =0; // x location of square
int y =0; // y location of square
int speed = 5; // speed of square
int state = 0;
void setup() {
  size(200, 200);
}
void draw() {
  background(100);
  // Display the square
  noStroke();
  fill(255);
  rect(x, y, 10, 10);
  if (state == 0) {
    x = x + speed;
    if (x > width-10) {
      x = width-10;
      state =1;
    }
  } else if (state == 1) {
    y = y + speed;
    if (y > height-10) {
      y = height-10;
      state =2;
    }
  } else if (state == 2) {
    x = x - speed;
    if (x < 0) {
      x = 0;
      state =3;
    }
  } else if (state == 3) {
    y = y - speed;
    if (y < 0) {
      y = 0;
      state =0;
    }
  }
} 
```

### example
```java
float x = 100; // x location of square
float y = 0; // y location of square
float speed = 0; // speed of square
float gravity = 0.1;
void setup() {
  size(200, 200);
}
void draw() {
  background(255);

  // Display the square
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(x, y, 10, 10);
  y = y + speed;
  speed =speed + gravity;
  // If square reaches the bottom
  // Reverse speed
  if (y > height) {
    speed =speed * -0.95;
  }
} 
```

### example
![](/docs/images/2020-12-16-14-23-22.png)
```java
float x = 100;
float y = 100;
float w = 60;
float h = 60;
float eyeSize = 16;
float xspeed = 3;
float yspeed = 1;
void setup() {
  size(200, 200);
  smooth();
}
void draw() {
  // Change the location of Zoog by speed
  x = x + xspeed;
  y = y + yspeed;

  if ((x >width) || (x <0)) {
    xspeed= xspeed * -1;
  }
  if ((y> height) || (y < 0)) {
    yspeed= yspeed * -1;
  }
  background(0);
  ellipseMode(CENTER);
  rectMode(CENTER);
  noStroke();
  // Draw Zoog's body
  fill(150);
  rect(x, y, w/6, h*2);
  // Draw Zoog's head
  fill(255);
  ellipse(x, y-h/2, w, h);
  // Draw Zoog's eyes
  fill(0);
  ellipse(x-w/3, y-h/2, eyeSize, eyeSize*2);
  ellipse(x + w/3, y-h/2, eyeSize, eyeSize*2);
  // Draw Zoog's legs
  stroke(150);
  line(x-w/12, y + h, x-w/4, y + h + 10);
  line(x + w/12, y + h, x + w/4, y + h + 10);
} 
```

## 6，Loops P81

### example 6-3
```java
 int y = 80; // Vertical location of each line
int x = 50; // Initial horizontal location for first line
int spacing = 4; // How far apart is each line
int len = 20;
void setup() {
  size(200, 200);
}
void draw() {
  int endLegs = 150;
  stroke(0);
  while (x <=endLegs) {
    line (x, y, x, y + len);
    x = x+ spacing; // spacing是个int数！
  }
}
```

### 练习
![](/docs/images/2020-12-16-14-28-38.png)
```java
int y = 0; // Vertical location of each line
int spacing = 10; // How far apart is each line
void setup() {
  size(200, 200);
  background(255,255,255);
}
void draw() {
  stroke(0);
  while (y <=height) {
    line (0, y, width, y);
    y = y+ spacing;
  }
}
```

### 练习
![](/docs/images/2020-12-16-14-47-19.png)
![](/docs/images/2020-12-16-14-59-50.png)
一定要从外圈开始画。否则被覆盖，就剩下最外面的圈圈了
```java
int y = 0; // Vertical location of each line
int banjing = 0;
int spacing = 30; // How far apart is each line
void setup() {
  size(800, 800);
  background(255, 255, 255);
  stroke(0);
  banjing = width/2-10;
}
void draw() {
  
  while (banjing > 0) {
    fill(map(banjing,0,400,0,255));
    println(banjing);
    ellipse (width/2, height/2, banjing,banjing);
    banjing = banjing - spacing;
  }
}
```

### example6-10 左右移动，鼠标无响应
![](/docs/images/2020-12-16-15-28-12.png)
```java
// Example 6-10: Zoog with arms 
int x = 100;
int y = 100;
int w = 60;
int h = 60;
int eyeSize = 16;
int speed = 1;
void setup() {
  size(200, 200);
  smooth();
}
void draw() {
  // Change the x location of Zoog by speed
  x = x + speed;
  // If we've reached an edge, reverse speed (i.e. multiply it by -1)
  //(Note if speed is a + number, square moves to the right,- to the left)
  if ((x > width) || (x < 0)) {
    speed = speed * -1;
  }
  background(255); // Draw a white background
  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER);
  // Draw Zoog's arms with a for loop
  for (int i = y + 5; i < y + h; i += 10) {
    stroke(0);
    line(x - w/3, i, x + w/3, i);
  } 
  // Draw Zoog's body
  stroke(0);
  fill(175);
  rect(x, y, w/6, h*2);
  // Draw Zoog's head
  fill(255);
  ellipse(x, y-h/2, w, h);
  // Draw Zoog's eyes
  fill(0);
  ellipse(x-w/3, y-h/2, eyeSize, eyeSize*2);
  ellipse(x + w/3, y-h/2, eyeSize, eyeSize*2);
  // Draw Zoog's legs
  stroke(0);
  line(x-w/12, y + h, x-w/4, y + h + 10);
  line(x + w/12, y + h, x + w/4, y + h + 10);
} 
```
### example 6-11
![](/docs/images/2020-12-16-15-29-36.png)
```java
int w= 60;
int h= 60;
int eyeSize = 16;
void setup() {
  size(400, 200);
  smooth();
}
void draw() {
  background(255);
  ellipseMode(CENTER);
  rectMode(CENTER);
  int y= height/2;
  // Multiple versions of Zoog
  for (int x = 80; x < width; x +=80) {
    // Draw Zoog's body
    stroke(0);
    fill(175);
    rect(x, y, w/6, h*2);
    // Draw Zoog's head
    fill(255);
    ellipse(x, y-h/2, w, h);
    // Draw Zoog's eyes
    fill(0);
    ellipse(x-w/3, y-h/2, eyeSize, eyeSize*2);
    ellipse(x + w/3, y-h/2, eyeSize, eyeSize*2);
    // Draw Zoog's legs
    stroke(0);
    line(x-w/12, y + h, x-w/4, y + h +10);
    line(x + w/12, y + h, x + w/4, y + h +10);
  }
} 
```

### exercise 6-7
略

### exercise 6-8
![](/docs/images/2020-12-16-15-30-33.png)
![](/docs/images/2020-12-16-15-34-48.png)
```java

void setup() {
  size(200, 200);
  noStroke();
  rectMode(CORNER);
  for (int i=0; i<=width-10; i+=10) {
    for ( int j=0; j<=height-10; j+=10) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      rect(i,j,i+10,j+10);
    }
  }
}
```

### example 6-9
![](/docs/images/2020-12-16-16-39-59.png)
```java
void setup() {
  size(255, 255);
  background(0);
}
void draw() {
  background(0);
  // Start with i as 0
  int i = 0;
  // While i is less than the width of the window
  while (i < width) {
    noStroke(); 

    // 这两行，定义了每个竖条的规律。距离鼠标越远，它的值越大
    // 越大就是越亮
    float distance = abs(mouseX - i);
    fill(distance);
    
    rect(i, 0, 10, height);
    // Increase i by 10
    i +=10;
  }
}
```

## lession2 的总结工程

---
## -------------lession3 组织-------------
## 7，Functions P101

### example7-3 原来轮回小球的例子，重构出几个function
```java
 // Declare all global variables (stays the same)
int x = 0;
int speed = 1;
// Setup does not change
void setup() {
  size(200, 200);
  smooth();
}
void draw() {
  background(255);
  move();
  bounce();
  display();
}
// A function to move the ball
void move() {
  // Change the x location by speed
  x = x + speed;
}
// A function to bounce the ball
void bounce() {
  // If we’ve reached an edge, reverse speed
  if ((x> width) || (x < 0)) {
    speed = speed * - 1;
  }
}
// A function to display the ball
void display() {
  stroke(0);
  fill(175);
  ellipse(x, 100, 32, 32);
}

 ```

### 7-4 example
![](/docs/images/2020-12-16-17-07-16.png)
```java
void setup() {
  size(200, 200);
}
void draw() {
  background(0);
  stroke(0);
  // Top left square
  fill(distance(0, 0, mouseX, mouseY));
  rect(0, 0, width/2 - 1, height/2 - 1);
  // Top right square
  fill(distance(width, 0, mouseX, mouseY));
  rect(width/2, 0, width/2 - 1, height/2 - 1);
  // Bottom left square
  fill(distance(0, height, mouseX, mouseY));
  rect(0, height/2, width/2 - 1, height/2 - 1);
  // Bottom right square
  fill(distance(width, height, mouseX, mouseY));
  rect(width/2, height/2, width/2 - 1, height/2 - 1);
}
float distance(float x1, float y1, float x2, float y2)
{
  float dx = x1 - x2;
  float dy = y1 - y2;
  float d = sqrt(dx*dx + dy*dy);
  return d;
} 
```

## 8，Objects P121

### example 8-01 定义和使用类
::: warning
 可以：new tab，把类放到另外一个文件。
:::
```java
Car myCar;
void setup() {
  size(200, 200);
  // Initialize Car object
  myCar = new Car();
}
void draw() {
  background(0);
  // Operate Car object.
  myCar.move();
  myCar.display();
} 

class Car {
  color c;
  float xpos;
  float ypos;
  float xspeed;
  Car() {
    c = color(255);
    xpos = width/2;
    ypos = height/2;
    xspeed = 1;
  }
  void display() {
    // The car is just a square
    rectMode(CENTER);
    fill(c);
    rect(xpos, ypos, 20, 10);
  }
  void move() {
    xpos = xpos + xspeed;
    if (xpos > width) {
      xpos = 0;
    }
  }
}
```

### example 8-3
```java
Zoog zoog;
void setup() {
  size(200, 200);
  smooth();
  zoog = new Zoog(100, 125, 60, 60, 16);
}
void draw() {
  background(255);
  // mouseX position determines speed factor
  float factor = constrain(mouseX/10, 0, 5);
  zoog.jiggle(factor);
  zoog.display();
}
class Zoog {
  // Zoog's variables
  float x, y, w, h, eyeSize;
  // Zoog constructor
  Zoog(float tempX, float tempY, float tempW, float tempH, float tempEyeSize) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    eyeSize = tempEyeSize;
  } 
  // Move Zoog
  void jiggle(float speed) {
    // Change the location of Zoog randomly
    x = x + random(-1, 1)*speed;
    y = y + random(-1, 1)*speed;
    // Constrain Zoog to window
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
  // Display Zoog
  void display() {
    // Set ellipses and rects to CENTER mode
    ellipseMode(CENTER);
    rectMode(CENTER);
    // Draw Zoog's arms with a for loop
    for (float i = y - h/3; i < y + h/2; i += 10) {
      stroke(0);
      line(x-w/4, i, x + w/4, i);
    }
    // Draw Zoog's body
    stroke(0);
    fill(175);
    rect(x, y, w/6, h);
    // Draw Zoog's head
    stroke(0);
    fill(255);
    ellipse(x, y-h, w, h);
    // Draw Zoog's eyes
    fill(0);
    ellipse(x-w/3, y-h, eyeSize, eyeSize*2);
    ellipse(x + w/3, y - h, eyeSize, eyeSize*2);
    // Draw Zoog's legs
    stroke(0);
    line(x - w/12, y + h/2, x - w/4, y + h/2 + 10);
    line(x + w/12, y + h/2, x + w/4, y + h/2 + 10);
  }
} 
```

---
## -------------lession4 -------------
## 9，Arrays  P141
```java
int[] arrayOfInts = new int[42];
int num = 50;
Car[] cars = new Car[num];
SpaceShip[] ships = new SpaceShip[num*2+3];

for( int i =0 ;i< values.length;i++){
  values[i] = 0 ;
}
```

### example 9-8 追着鼠标的蛇  写得比较好。
::: warning
 写的好
:::
![](/docs/images/2020-12-16-17-38-21.png)
```java
// x and y positions
int[] xpos = new int[50];
int[] ypos = new int[50];
void setup() {
  size(200, 200);
  smooth();
  // Initialize
  for (int i = 0; i <xpos.length;i++) {
    xpos[i] = 0;
    ypos[i]= 0;
  }
} 
void draw() {
  background(255);
  // Shift array values
  for (int i = 0; i < xpos.length-1; i++ ) {
    xpos [i]= xpos[i + 1];
    ypos[i]= ypos[i + 1];
  }
  // New location
  xpos[xpos.length-1] = mouseX;
  ypos[ypos.length-1] = mouseY;
  // Draw everything
  for (int i = 0; i < xpos.length; i++ ) {
    noStroke();
    fill(255-i*5); // 越古老的点越亮
    ellipse(xpos[i], ypos[i], i, i); // 越古老的点越小
  }
} 
```


### example9-9 仅仅为了演示对象数组
![](/docs/images/2020-12-16-17-47-14.png)
```java
Car[] cars = new Car[100];

void setup(){
  size(200,200);
  smooth();
  for( int i = 0 ;i< cars.length; i++){
    cars[i] = new Car(color(i*2),0,i*2,i/20.0); 
  }
}

void draw(){
 background(255);
 for( int i=0;i< cars.length;i++){
   cars[i].move();
   cars[i].display();
 }
}

class Car{
 color c; 
 float xpos;
 float ypos;
 float xspeed;
 
 Car(color c_ , float xpos_,float ypos_, float xspeed_){
   c = c_;
   xpos = xpos_;
   ypos = ypos_;
   xspeed = xspeed_;
 }
 
 void display(){
   rectMode(CENTER);
   stroke(0);
   fill(c);
   rect(xpos,ypos,20,10);
 }
 
 void move(){
   xpos = xpos + xspeed;
   if( xpos > width){
     xpos =0;
   }
 }
  
}
```

### example 9-10 与数组里的对象互动
多个竖条向右移动，叠加。鼠标放上去高亮。
![](/docs/images/2020-12-16-18-03-57.png)
```java
// An array of stripes
Stripe[] stripes = new Stripe[10];
void setup() {
  size(200, 200);
  // Initialize all " stripes "
  for (int i = 0; i < stripes.length; i++ ) {
    stripes[i] = new Stripe();
  }
}
void draw() {
  background(100);
  // Move and display all " stripes "
  for (int i = 0; i < stripes.length; i++ ) {
    // Check if mouse is over the Stripe
    stripes[i].rollover(mouseX, mouseY);
    stripes[i].move();
    stripes[i].display();
  }
} 
class Stripe {
  float x; // horizontal location of stripe
  float speed; // speed of stripe
  float w; // width of stripe
  boolean mouse; // state of stripe (mouse is over or not?)
  Stripe() {
    x = 0; // All stripes start at 0
    speed = random(1); // All stripes have a random positive speed
    w = random(10, 30);
    mouse = false;
  }
  // Draw stripe
  void display() {
    if (mouse) {
      fill(255);
    } else {
      fill(255, 100);
    }
    noStroke();
    rect(x, 0, w, height);
  }
  // Move stripe
  void move() {
    x +=speed;
    if (x > width + 20) x = -20;
  } 
  // Check if point is inside of Stripe
  void rollover(int mx, int my) {
    // Left edge is x, Right edge is x + w
    if (mx > x && mx < x + w) {
      mouse = true;
    } else {
      mouse = false;
    }
  }
}
```

### example 鼠标点击生成下落的小球 （好） 彩球
![](/docs/images/2020-12-16-18-09-48.png)

这个模型的理解，可以去参考数学公式。去看另一本书。介绍向量。
```java
Ball[] balls = new Ball[1];
float gravity = 0.1;
void setup() {
  //size(200, 200);
  fullScreen();
  smooth();
  frameRate(30);
  // Initialize ball index 0
  balls[0] = new Ball(50, 0, 20,color(random(255),random(255),random(255)));
}
void draw() {
  background(0);
  // Update and display all balls
  for (int i = 0; i < balls.length; i++ ) {
    balls[i].gravity();
    balls[i].move();
    balls[i].display();
  }
} 

void mousePressed() {
  // A new ball object
  Ball b = new Ball(mouseX, mouseY, 20,color(random(255),random(255),random(255)));
  // Append to array
  balls = (Ball[]) append(balls, b);
} 

class Ball {
  float x;
  float y;
  float speed;
  float w; 
  color c;
  Ball(float tempX, float tempY, float tempW,color tempC) {
    x = tempX;
    y = tempY;
    w = tempW;
    speed = 0;
    c = tempC;
  } 
  void gravity() {
    // Add gravity to speed
    speed = speed + gravity;
  }
  void move() {
    // Add speed to y location
    y = y + speed;
    // If square reaches the bottom
    // Reverse speed
    if (y > height) {
      speed = speed * -0.95;
      y = height;
    }
  }
  void display() {
    // Display the circle
    fill(c);
    noStroke();
    ellipse(x, y, w, w);
  }
} 
```

### example 9-12 就是多个青蛙，没什么特别
![](/docs/images/2020-12-17-11-10-25.png)
```java
Zoog[] zoogies = new Zoog[200];
void setup() {
  size(400, 400);
  smooth();
  for (int i = 0; i < zoogies.length; i++ ) {
    zoogies[i] = new Zoog(random(width), random(height), 30, 30, 8);
  }
}
void draw() {
  background(255); // Draw a black background
  for (int i = 0; i < zoogies.length; i++ ) {
    
    zoogies[i].jiggle();
    zoogies[i].display();
  }
}
class Zoog {
  // Zoog's variables
  float x, y, w, h, eyeSize;
  // Zoog constructor
  Zoog(float tempX, float tempY, float tempW, float tempH, float tempEyeSize) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    eyeSize = tempEyeSize;
  } 
  // Move Zoog
  void jiggle() {
    // Change the location
    x = x + random(-1, 1);
    y = y + random(-1, 1);
    // Constrain Zoog to window
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
  // Display Zoog
  void display() {
    // Set ellipses and rects to CENTER mode
    ellipseMode(CENTER);
    rectMode(CENTER);
    // Draw Zoog's arms with a for loop
    for (float i = y-h/3; i < y + h/2; i += 10) {
      stroke(0);
      line(x-w/4, i, x + w/4, i);
    }
    // Draw Zoog's body
    stroke(0);
    fill(175);
    rect(x, y, w/6, h);
    // Draw Zoog's head
    stroke(0);
    fill(255);
    ellipse(x, y-h, w, h);
    // Draw Zoog's eyes
    fill(0);
    ellipse(x-w/3, y-h, eyeSize, eyeSize*2);
    ellipse(x + w/3, y-h, eyeSize, eyeSize*2);
    // Draw Zoog's legs
    stroke(0);
    line(x-w/12, y + h/2, x-w/4, y + h/2 + 10);
    line(x + w/12, y + h/2, x + w/4, y + h/2 + 10);
  }
}

```
## -------------lessin5 算法-------------
## 10，Algorithms  P165
- 算法就是实现它的步骤
- 复杂系统分成足够小的能写伪代码的块
- 分块设计伪代码
  - 先写一个对象雨滴
  - 验证这一个对象，然后在创建两个雨滴来验证原型。
  - 没问题的话，创建多个雨滴继续验证原型
- 在把分块组合起来，优化
- 最后面向对象的方式组合起来

### 1. 主程序
```
int dropNum = 50;
int totalDrops =0 ;
Drop[] drops ;
Timer timer ;
color backgroudColor=0;
Catcher catcher ;

void setup() {

  size(400, 400);
  background(backgroudColor);
  smooth();
  frameRate(30);

  // 1. create catcher object
  catcher = new Catcher(10);

  // 2. create arrray of drops
  drops = new Drop[dropNum];

  // 3. set totalDrops = 0 
  totalDrops =0 ;

  // 4. create Timer object
  // record passedTime
  timer = new Timer(2000);


  // 5. start Timer
  timer.start();
}

void draw() {
  background(backgroudColor);

  // ## set Cather location to mouse location
  // (no need)

  // ## Display Catcher
  catcher.display();



  for ( int i=0; i<totalDrops; i++) {
    if ( null!=drops[i] ) {
      // ## Move all alailable Drops
      drops[i].move();
      drops[i].reverse();
      // ## Display all available Drops
      drops[i].display();
    }
  }  

  for ( int i=0; i<totalDrops; i++) {
    // ## If the Catcher intersects any Drops 
    if ( null!=drops[i] && catcher.intersect(drops[i])) {
      // - Remove Drop from screen
      catcher.flash();
      
      drops[i] = null;
    }
  }  
  // ## If the timer is finished
  if (timer.isFinished()) {
    // - Increate the number of drops
    drops[totalDrops] = new Drop(10, random(-5, 5), random(-5, 5), color(127));
    totalDrops += 1;
    if ( totalDrops >= dropNum) {
      totalDrops =0 ;
    }

    // - Restart timer
    timer.start();
  }
}
```

### 2. Catcher类
```java
class Catcher{
 float r; // r is radius
 color c = color(127);
 Catcher(float r_){
   this.r = r_;
 }
 
 // show catcher as cricle
 void display(){
   background(0);
   noStroke();
   fill(c);
   circle(mouseX,mouseY,2*r);
 }
 
 void flash(){
   c = color(255,255,255);
   display();
   c = color(127);
   display();
 }
 
 boolean intersect(Drop drop){
   //println("dist="+dist(mouseX,mouseY,drop.xpos,drop.ypos)+",(r + drop.r) ="+(r + drop.r) );
   if( dist(mouseX,mouseY,drop.xpos,drop.ypos) <=  (r + drop.r) ){
     println("intersect!");
     return true; 
   }else{
     return false; 
   }
   
 }
}
```

### 3.Drop
```java
class Drop {
  //1.elements
  // x , y ,r
  // speed
  float xpos, ypos;
  float r; // radius
  float xspeed, yspeed;
  color c;
  float gravity = 0.1;

  //2. Constructor [r is radius]
  Drop( float r_, float xspeed_, float yspeed_, color c_) {
    this.xpos = random(width);
    this.r = r_;
    this.ypos = -r*4 ;
    this.xspeed = xspeed_;
    this.yspeed = yspeed_;
    this.c = c_;
  }

  //3.functions
  /**
   * move() caculate x and y by speed.
   */
  // move()
  void move() {
    xpos = xpos + xspeed;
    ypos = ypos + yspeed;
    yspeed += gravity;
  }

  /**
   * reverse() if outof bounds reverse 
   */
  void reverse() {
    if ( xpos > width ) {
      xpos = width;
      xspeed = xspeed * -1;
    } else if ( xpos < 0) {
      xpos = 0;
      xspeed = xspeed * -1;
    }

    if ( ypos < 0 ) {
      ypos = 0;
      yspeed *= -1;
    }
  }
  /**
   * display() draw a circle.
   */
  // display()
  void display() {
    // grey 
    noStroke();
    fill(c);
    // circle
    circle(xpos, ypos, 2*r);//r is banjing
    // drop , with multi ellipse .
    //for (int i = 2; i < r; i++ ) {
    //  ellipse(xpos, ypos + i*4, i*2, i*2);
    //}
  }


  /**
   * intersect(Ball) ball is intersect another ball. 
   */
  boolean intersect(Drop ball2) {
    if ( dist(this.xpos, this.ypos, ball2.xpos, ball2.ypos) <= (this.r+ball2.r) ) {

      return true;
    } else {
      return false;
    }
  }
}
```

### 4. Timer
```java
class Timer {
  int savedTime;
  int totalTime;

  Timer(int tempTime) {
    this.totalTime = tempTime;
  }

  void start() {
    this.savedTime = millis();
  }

  boolean isFinished() {
    int passedTime = millis() - savedTime;
    if ( passedTime > totalTime) {
      this.savedTime = millis();
      return true;
    } else {
      return false;
    }
  }
}
```

## 11，Debugging P191 （基础）
略，多于老程序员来说，不用赘言。


## 12，librarys P214 （基础）（终于开始接触库了）
简单介绍了一下，可以引用库。没什么实质内容。


## -------------lessin6 math-------------
想要知道为什么需要看这个的话，

## 13，Mathematics P201
::: warning
取余→随机数→概率论→概率编码→佩林噪声→角度→三角计算→振荡→递归→二维矩阵
:::
### 13.1 A%C 的结果永远不会比C大。所以，取余经常用来循环一个变量回到0。例如，index=（index+1）% array.length ;
### 13.2 概率用来编码，每个事件概率0.n，然后随机一个数1. 然后if else 判断。
::: warning
学会这种设定事件概率的模式。
:::
  ``` java
  void setup() {
  size(200, 200);
  background(255);
  smooth();
  noStroke();
}
void draw() {
  // Probabilities for 3 different cases
  // These need to add up to 100%!
  float red_prob = 0.60; // 60% chance of red color
  float green_prob = 0.10; // 10% chance of green color
  float blue_prob = 0.30; // 30% chance of blue color
  float num = random(1); // pick a random number between 0 and 1
  // If random number is less than .6
  if (num < red_prob) {
    fill(255, 53, 2, 150);
    // If random number is between .6 and .7
  } else if (num < green_prob+ red_prob) {
    fill(156, 255, 28, 150);
    // All other cases (i.e. between .7 and 1.0)
  } else {
    fill(10, 52, 178, 150);
  }
  ellipse(random(width), random(height), 64, 64);
} 
```
### 13.3 佩林噪声
模拟有机体的一些随机。不像随机数那么跳动剧烈。佩林噪声比较连续。
可以模拟云，风景，大理石纹理，等有一定连续的东西。
![](/docs/images/2020-12-21-13-47-46.png)

下面用佩林噪声，输入一个时间参数，得到一个0~1之间的随机数。
- 该随机数*width得到一个在宽度范围内波动的位置。
```java
void setup() {
  size(800, 800);
  background(127);
  smooth();
  noStroke();
}

float t = 0.0;
float x = 0.0;
float y = 0.0;
void draw() {
  background(127);
  float noisevalue = noise(t);
  float xvalue = noise(x)*width;
  float yvalue = noise(y)*height;
  println(noisevalue);
  t = t + 0.0001;
  x = x + 0.001;
  y = y + 0.005;
  float radius = noisevalue*width*0.8;
  
  fill(0);
  println(radius);
  stroke(127);
  ellipse(xvalue%(width-radius),yvalue,radius,radius);
   
}

```

### 13.4 弧度
 - Radians = 2 * PI * (degrees/360) 一个整圆就是2Pi，算某个角度对应的pi，就是360的比例。
```java
 float angle = radians(60);
 rotate(angle);
```

### 13.5 三角函数
![](/docs/images/2020-12-21-15-31-44.png)
• soh: sine $ opposite/hypotenuse
• cah: cosine $ adjacent/hypotenuse
• toa: tangent $ opposite/adjacent

笛卡尔坐标，笛卡尔空间。弧度和半径。
::: warning 领悟
 x，y随着弧度变化，固定了半径，变化弧度，就能得到一个圆环的。
 x = r * cos(theta)
 y = r * sin(theta)
 这样的x，y设定，就能得到一个圆环轨迹。
:::
```java
// A Polar coordinate
float r = 75;
float theta = 0;
void setup() {
  size(200, 200);
  background(255);
  smooth();
}
void draw() {
  // Polar to Cartesian conversion
  float x = r * cos(theta);
  float y = r * sin(theta);
  // Draw an ellipse at x,y
  noStroke();
  fill(0);
  ellipse(x + width/2, y + height/2, 16, 16); // Adjust for center of window
  // Increment the angle
  theta +=0.01;
} 
```

### 作业
![](/docs/images/2020-12-21-15-45-52.png)
```java
// A Polar coordinate
float r = 0;
float theta = 0;

void setup() {
  size(400, 400);
  background(255);
  smooth();
}
void draw() {
  
  // Polar to Cartesian conversion
  float x = r * cos(theta);
  float y = r * sin(theta);
  // Draw an ellipse at x,y
  noStroke();
  fill(0);
  ellipse(x + width/2, y + height/2, 16, 16); // Adjust for center of window
  // Increment the angle
  r = r+0.05; // 其实就是半径不断变长。固定长就是一个圆。
  theta +=0.01;
} 
```

### 13.6 振动
我自己写的
::: warning 心得
  就是用sin(变化的弧度)*width：得到一个在width之间摆动（-1，1）。
:::
![](/docs/images/2020-12-21-16-07-32.png)
```java
float theta = 0;
void steup(){
 background(255);
 
}

void draw(){
 background(255);
 stroke(0);
 float x = width/2 * sin(theta);
 line(width/2,0,x+width/2,height/2);
 fill(0);
 ellipse(x+width/2,height/2,16,16);
 theta += 0.1;
}
```
![](/docs/images/2020-12-21-16-38-55.png)
波
```java
// Starting angle
float theta = 0.0;
void setup() {
  size(200, 200);
  smooth();
}
void draw() {
  background(255);
  // Increment theta (try different values for " angular velocity "here)
  theta +=0.02;
  noStroke();
  fill(0);
  float x = theta;
  // A simple way to draw the wave with an ellipse at each location
  for (int i = 0; i <=20; i++) {
    // Calculate y value based off of sine function
    float y = sin(x)*height/2;
    // Draw an ellipse
    ellipse(i*10, y + height/2, 16, 16);
    // Move along x-axis
    x +=0.2;
  }
}
```

### 13.7 递归
- 例如，阶乘
![](/docs/images/2020-12-21-17-55-58.png)
![](/docs/images/2020-12-21-17-56-04.png)

- 另外可以，循环画出很多东西，不用多次调用draw多次，而是一次draw很多东西。(不用递归也行)
![](/docs/images/2020-12-21-18-00-06.png)
```java
void setup(){
  size(200,200);
  
}
void draw() {
  stroke(0);
  drawCircle(width/2,height/2,80);
}

void drawCircle(int x, int y, float radius) {
  ellipse(x, y, radius, radius);
  if (radius > 2) {
    radius *= 0.75f;
    drawCircle(x, y, radius);
  }
}
```
- 在本圆心左右两边端点上再画两个圆，大小是原来的一半。（这是它擅长的，不用递归不行）
![](/docs/images/2020-12-21-18-02-39.png)
```java
void drawCircle(float x, float y, float radius) {
  ellipse(x, y, radius, radius);
  if (radius > 2) {
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
  }
}
```

- 在圆心的上下左右都画两个圆。
![](/docs/images/2020-12-21-18-06-34.png)
```java
void drawCircle(float x, float y, float radius) {
  ellipse(x, y, radius, radius);
  if (radius > 8) {
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
    drawCircle(x, y + radius/2, radius/2);
    drawCircle(x, y - radius/2, radius/2);
  }
}
```

### 练习（重要！）
![](/docs/images/2020-12-21-18-09-02.png)
想了半天终于实现了。

::: warning  心得体会
难点在发现规律。诀窍在尽量别引入太多变量。我之前画三角引入了三个点，6个变量。
6个变量之间的规律太难确定，不如引入一个点，再加上一个高。其他两个点通过这个高来推算。
变化的部分就变成了一个。这很大程度上减少了思考的强度。
另外，递归函数里面的规律，到底是x-h/2还是x-x，通过一个情况还验证还不够，还得通过多几个例子来验证，这样计算对不对。
:::
```java
void setup() {
  size(400, 200);
  background(255);
  stroke(0);
  frameRate(1);
}
void draw() {
  stroke(0);
  branch(width/2, height,200);
}

void branch(float x, float y,float h) {
   println(h);
  triangle(x,y,x-h,y-h,x+h,y-h);
  if(h>10){
    branch(x-h/2,y/2,h/2);
    branch(x+h/2,y/2,h/2);
  }
}
```
### 13.8 二维数组=矩阵
![](/docs/images/2020-12-22-11-26-56.png)
width,height每个像素都是二维数组的元素。每个元素的值随机了一个灰度。然后用这个灰度定义stroke。一个元素作为一个point显示。
```java
void setup() {
  // Set up dimensions
  size(200, 200);
  int cols = width;
  int rows = height;
  // Declare 2D array
  int[][] myArray = new int[cols][rows];
  // Initialize 2D array values
  for (int i = 0; i < cols; i++ ) {
    for (int j = 0; j < rows; j++ ) {
      myArray[i][j] = int(random(255));
    }
  }
  // Draw points
  for (int i = 0; i < cols; i ++ ) {
    for (int j = 0; j < rows; j++ ) {
      stroke(myArray[i][j]);
      point(i, j);
    }
  }
}
```

例子2，颜色有规律在一个区间交替变化(想到振荡)
::: warning 值得学习的地方
 - 每个区块的颜色在一定范围内变化，首先，想到用振荡来实现。
 - 像波浪一样，这个是设计不出来的。还是
:::
![](/docs/images/2020-12-22-11-34-08.png)
```java
// 2D Array of objects
Cell[][] grid;
// Number of columns and rows in the grid
int cols = 10;
int rows = 10;
void setup() {
  size(200, 200);
  grid = new Cell[cols][rows];
  for (int i = 0; i < cols; i++ ) {
    for (int j = 0; j < rows; j++ ) {
      // Initialize each object
      grid[i][j] = new Cell(i*20, j*20, 20, 20, i + j);
    }
  }
}
void draw() {
  background(0);
  for (int i = 0; i < cols; i++ ) {
    for (int j = 0; j < rows; j++ ) {
      // Oscillate and display each object
      grid[i][j].oscillate();
      grid[i][j].display();
    }
  }
}
// A Cell object
class Cell {
  float x, y; // x,y location
  float w, h; // width and height
  float angle; // angle for oscillating brightness
  // Cell Constructor
  Cell(float tempX, float tempY, float tempW, float tempH, float tempAngle) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    angle = tempAngle;
  }
  // Oscillation means increase angle
  void oscillate() {
    angle +=0.02;
  }
  void display() {
    stroke(255);
    // Color calculated using sine wave
    fill(127 + 127*sin(angle));
    rect(x, y, w, h);
  }
}
```

例子，定义类，鼠标点击变色
![](/docs/images/2020-12-22-11-50-23.png)
::: warning 学习点
 判断鼠标在格子里的方法。
:::
```java
Cell[][] board;
int cols=3;
int rows=3;
void setup() {
  // FILL IN
  size(90, 90);
  board = new Cell[cols][rows];
  for (int i = 0; i < cols; i++ ) {
    for (int j = 0; j < rows; j++ ) {
      board[i][j] = new Cell(i*30,j*30,30,30);
    }
  }
}
void draw() {
  background(0);
  for (int i = 0; i < cols; i++ ) {
    for (int j = 0; j < rows; j++ ) {
      board[i][j].display();
    }
  }
}
void mousePressed() {
  // FILL IN
  for (int i = 0; i < cols; i++ ) {
    for (int j = 0; j < rows; j++ ) {
      board[i][j].click(mouseX,mouseY);
    }
  }
}
// A Cell object
class Cell {
  float x, y;
  float w, h;
  int state;
  // Cell Constructor
  Cell(float tempX, float tempY, float tempW, float tempH) {
    // FILL IN
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    state = 0;
  }
  void click(int mx, int my) {

    if ( mx > x && mx < x + w  && my > y && my < y+h) {
      //isclick =true;
      // FILL IN
      if ( state == 0 ) {
        state = 1;
      } else {
        state = 0;
      }
    }
  }

  void display() {
    // FILL IN
    if ( state == 0 ) {
      fill(127);
    } else {
      fill(0);
    }
    rect(x, y, w, h);
  }
} 
```

上面例子改成画X,只需要修改display（）
![](/docs/images/2020-12-22-11-57-24.png)
```java
  void display() {
    // FILL IN
    if ( state == 0 ) {
      //fill(255);
      rect(x, y, w, h);
    } else {
     // fill(127);
      rect(x, y, w, h);
      line(x, y, x+w, y+h);
      line(x, y+h, x+w, y);
    }
  }
```

## 14，Translation and Rotation P227
Z轴→P3D vs OpenGL→顶点形状→简单旋转→绕不同轴旋转→伸缩→推拉→做一个太阳系视觉系统

### 14.1 理解translate ，之后rect都是相对这个点作为原点，写x，y。而不是默认0，0作为原点。
```java 
float z = 80; // a variable for the Z (depth) coordinate
void setup() {
  size(200, 200);
  background(255);
  stroke(127);
  fill(255, 100);
  translate(50,50); // 相对于默认初始点（0，0）二维移动
  rect(0, 0, 100, 100);
  translate(50, -50);// 相对于上一个点二维移动
  rect(0, 0, 100, 100);
  translate(-50, 150);// 相对于上一个点二维移动
  line(0, 0, -50, 50);
}
```
↓
Z轴→**P3D vs OpenGL**→顶点形状→自定义3D图形→简单旋转→绕不同轴旋转→伸缩→推拉→做一个太阳系视觉系统
### 14.2 P3D vs OpenGL 两者速度谁快？ 比较了一下，差不多。
```java
 import processing.opengl.*; 
 size(200,200); // using the default JAVA2D mode
 size(200,200,P3D); // using P3D （纯软件）
 size(200,200,OPENGL); // using OPENGL （带硬件加速）
 ```
### 14.3 自定义多边形。自定义曲线。
Z轴→P3D vs OpenGL→**顶点形状**→自定义3D图形→简单旋转→绕不同轴旋转→伸缩→推拉→做一个太阳系视觉系统

`rect(50,50,100,100); ` 等于
```java
 beginShape();
 vertex(50,50);
 vertex(150,50);
 vertex(150,150);
 vertex(50,150);
 endShape(CLOSE); 
```
自定义曲线。
![](/docs/images/2020-12-22-13-50-00.png)
```java
void setup() {
  noFill();
  stroke(0);
  println(width);
  beginShape();
  
  for (int i = 10; i < width; i += 20) {
    curveVertex(i, 10);
    curveVertex(i, height-10);
  }
  endShape();
}

```

### 14.4 自定义3D图形
- Z轴→P3D vs OpenGL→顶点形状→**自定义3D图形**→简单旋转→绕不同轴旋转→伸缩→推拉→做一个太阳系视觉系统

::: error 目前的课题
难点在长度于坐标需要计算才能闭合。
各个点的相对位置不太容易计算。
可以先不考虑会不会出窗口的话，还容易些。所以可以先把相对关系写上，如果出窗口了，再调整。
这样比较科学。
:::
```java
void setup() {
  size(200, 200, P3D);
}
void draw() {
  background(255);
  translate(100, 100, 0); // 把原点挪到中心。
  drawPyramid(140);
  int t = 180;
  println(t*tan(t/sqrt(sq(t)+sq(2*t))));
}
void drawPyramid(int t) {
  stroke(0);
  // this pyramid has 4 sides, each drawn as a separate triangle
  // each side has 3 vertices, making up a triangle shape
  // the parameter " t "determines the size of the pyramid
  beginShape(TRIANGLES);
  fill(255, 150);
  vertex(-t, -t, -t); // 这个点于原点还要远离t
  vertex( t, -t, -t);
  vertex( 0, 0, t);
  fill(150, 150);
  vertex( t, -t, -t);
  vertex( t, t, -t);
  vertex( 0, 0, t);
  fill(255, 150);
  vertex( t, t, -t);
  vertex(-t, t, -t);
  vertex( 0, 0, t); 
  fill(150, 150);
  vertex(-t, t, -t);
  vertex(-t, -t, -t);
  vertex( 0, 0, t);
  endShape();
} 
```

Z轴→P3D vs OpenGL→顶点形状→自定义3D图形→**绕Z轴旋转**→绕不同轴旋转→伸缩→推拉→做一个太阳系视觉系统
### 14.5 简单旋转,就是rotate（弧度）
```java
 float theta = PI*mouseX / width;
 // Rotate by the angle theta
 rotate(theta); // 绕着Z轴旋转
```
### 14.6 绕别的轴旋转 rotateY（角度）
Z轴→P3D vs OpenGL→顶点形状→自定义3D图形→绕Z轴旋转→**绕不同轴旋转**→伸缩→推拉→做一个太阳系视觉系统
- 画一个普普通通的平面形状。下面同时绕某一个轴。
  - 调用rotateZ：绕Z轴旋转，
  - 调用rotateX：绕X轴旋转，
  - 调用rotateY：绕Y轴旋转，
```java
float theta = 0.0;
void setup() {
  size(200, 200, P3D);
}
void draw() {
  background(255);
  stroke(0);
  fill(175);
  translate(width/2, 
    height/2);
  rotateY(theta);
  rectMode(CENTER);
  rect(0, 0, 100, 100);
  theta +=0.02;
} 
```
- 二维图形，同时绕两个轴旋转
![](/docs/images/2020-12-22-16-38-36.png)
```java
void setup() {
  size(200, 200, P3D);
}
void draw() {
  background(255);
  stroke(0);
  fill(175);
  translate(width/2, height/2);
  rotateX(PI*mouseY/height);
  rotateY(PI*mouseX/width);
  rectMode(CENTER);
  rect(0, 0, 100, 100);
} 
```
- 三维图形绕两轴旋转
![](/docs/images/2020-12-22-17-09-43.png)
::: warning 心得
 1. 首先，图形于旋转没关系。原来怎么画图形，现在还怎么画，不用考虑旋转。
    - 也就是说，旋转功能可以后来加进来。
    - 旋转定义好弧度和旋转函数，放到draw里，所有图形都会按规律旋转。
 2. 其次，translate与rotate有很大的关联。rotate就是依据**原点射出的轴线**旋转。 
    所以，ratate之前必须移动原点。
:::
```java
float theta = 0.0;
void setup() {
  size(200, 200, P3D);
}
void draw() {
  background(144);
  
  theta +=0.01;
  
  translate(100, 100, 0);
  rotateX(theta);
  rotateY(theta);
  drawPyramid(50);
  
  // translate the scene again
  translate(50, 50, 20);
  // call the pyramid drawing function
  drawPyramid(10);
}
void drawPyramid(int t) {
  stroke(0);
  // this pyramid has 4 sides, each drawn as a separate triangle
  // each side has 3 vertices, making up a triangle shape
  // the parameter "t" determines the size of the pyramid
  fill(150, 0, 0, 127);
  beginShape(TRIANGLES);
  
  vertex(-t, -t, -t);
  vertex( t, -t, -t);
  vertex( 0, 0, t);
  
  fill(0, 150, 0, 127);
  vertex( t, -t, -t);
  vertex( t, t, -t);
  vertex( 0, 0, t);
  
  fill(0, 0, 150, 127);
  vertex( t, t, -t);
  vertex(-t, t, -t);
  vertex( 0, 0, t);
  
  fill(150, 0, 150, 127);
  vertex(-t, t, -t);
  vertex(-t, -t, -t);
  vertex( 0, 0, t);
  
  endShape();
}
```
- 练习，把原来的金字塔旋转起来。

### 14.7 伸缩 ： scale(0.5)一半，scale(3)三倍那么大 
- Z轴→P3D vs OpenGL→顶点形状→自定义3D图形→绕Z轴旋转→绕不同轴旋转→**伸缩**→推拉→做一个太阳系视觉系统
- 比较简单。
```java
float r = 0.0;
void setup() {
  size(200, 200);
}
void draw() {
  background(0);
  // Translate to center of window
  translate(width/2, height/2);
  // Scale any shapes according to value of r
  scale(r);
  // Display a rectangle in the middle of the screen
  stroke(255);
  fill(100);
  rectMode(CENTER);
  rect(0, 0, 10, 10);
  // Increase the scale variable
  r +=0.02;
}
```
### 14.8 pushMatrix()把当前状态保存 popMatrix()恢复之前保存的状态
- Z轴→P3D vs OpenGL→顶点形状→自定义3D图形→绕Z轴旋转→绕不同轴旋转→伸缩→**推拉**→做一个太阳系视觉系统

目的： 为了使图形独立旋转。而不互相干扰。
::: warning 
 好习惯：pushMatrix() , translate(),rotate() popMatrix();
:::
下面所有图形都互相不干扰，各自旋转。
![](/docs/images/2020-12-22-18-09-41.png) 
```java
// An array of Rotater objects
Rotater[] rotaters;
void setup() {
  size(200, 200);
  rotaters= new Rotater[20];
  // Rotaters are made randomly
  for (int i = 0; i < rotaters.length; i++) {
    rotaters[i] =new Rotater(random(width), random(height), random(-0.1, 0.1), random(48));
  }
}
void draw() {
  background(255);
  // All Rotaters spin and are displayed
  for (int i = 0; i < rotaters.length; i++) {
    rotaters[i].spin();
    rotaters[i].display();
  }
}
// A Rotater class
class Rotater {
  float x, y; // x,y location
  float theta; // angle of rotation
  float speed; // speed of rotation
  float w; // size of rectangle
  Rotater(float tempX, float tempY, float tempSpeed, float tempW) {
    x = tempX;
    y = tempY;
    theta = 0; // Angle is always initialized to 0
    speed = tempSpeed;
    w = tempW;
  }
  // Increment angle
  void spin() {
    theta +=speed;
  }
  // Display rectangle
  void display() {
    rectMode(CENTER);
    stroke(0); 
    fill(0, 100);
    // Note the use of pushMatrix()
    // and popMatrix() inside the object's
    // display method!
    pushMatrix(); // 好习惯 translate之前push
    translate(x, y);
    rotate(theta);
    rect(0, 0, w, w);
    popMatrix(); // 好习惯 rotate之后pop
  }
}
```

### 14.9  做一个太阳系视觉系统
- Z轴→P3D vs OpenGL→顶点形状→自定义3D图形→绕Z轴旋转→绕不同轴旋转→伸缩→推拉→**做一个太阳系视觉系统**
练习：简单的太阳系,就是为了练习push，pop
![](/docs/images/2020-12-22-18-22-08.png)
```java
// Angle of rotation around sun and planets
float theta = 0;
void setup() {
  size(200, 200);
  smooth();
}
void draw() {
  background(255);
  stroke(0);
  // Translate to center of window
  
  // to draw the sun.
  translate(width/2, height/2);
  //rotate(theta);
  fill(255, 200, 50);
  ellipse(0, 0, 20, 20);
  
  // The earth rotates around the sun
  pushMatrix(); ////11111111111111
  
  rotate(theta);
  translate(50, 0);
  fill(50, 200, 255);
  ellipse(0, 0, 10, 10);
  
  // Moon #1 rotates around the earth
  pushMatrix();
  rotate(-theta*4);
  translate(15, 0);
  fill(50, 255, 200);
  ellipse(0, 0, 6, 6);
  popMatrix();
  
  // Moon #2 also rotates around the earth
  pushMatrix();
  rotate(theta*2);
  translate(25, 0);
  fill(50, 255, 200);
  ellipse(0, 0, 6, 6);
  popMatrix();
  
  popMatrix(); ////////////2222222222222
  theta +=0.01;
} 
```
这也太漂亮了吧。
![](/docs/images/2020-12-22-18-23-31.png)
```java
// Global angle for rotation
float theta = 0;
void setup() {
  size(200, 200);
  smooth();
}
void draw() {
  background(100);
  stroke(255);
  // Translate to center of window
  translate(width/2, height/2);
  // Loop from 0 to 360 degrees (2*PI radians)
  for (float i = 0; i < TWO_PI; i += 0.2) {
    // Push, rotate and draw a line!
    pushMatrix();
    rotate(theta + i);
    line(0, 0, 100, 0);
    
    // Loop from 0 to 360 degrees (2*PI radians)
    for (float j = 0; j < TWO_PI; j += 0.5) {
      // Push, translate, rotate and draw a line!
      pushMatrix(); // 因为转之前没有pop，所以下面的图形会有上面图形一样的转动轨迹。
      translate(100, 0);
      rotate(-theta-j); 
      line(0, 0, 50, 0);
      // We're done with the inside loop, pop!
      popMatrix(); // 保证下一个循环的图形，不受本次图形干扰。（只受循环外的图形影响。）
    }

    // We're done with the outside loop, pop!
    popMatrix();
  }
  endShape();
  // Increment theta
  theta += 0.01;
} 
```

练习，简单的太阳系。**星球类**。
![](/docs/images/2020-12-22-18-54-16.png)
```java
// An array of 8 planet objects
Planet[] planets = new Planet[8];
void setup() {
  size(200, 200);
  smooth();
  // The planet objects are initialized using the counter variable
  for (int i = 0; i < planets.length; i++ ) {
    planets[i] = new Planet(20 + i*10, i + 8);
  }
}
void draw() {
  background(255);
  // Drawing the Sun
  pushMatrix();
  translate(width/2, height/2);
  stroke(0);
  fill(255);
  ellipse(0, 0, 20, 20);
  // Drawing all Planets
  for (int i = 0; i < planets.length; i++ ) {
    planets[i].update();
    planets[i].display();
  }
  popMatrix();
} 

class Planet {
  float theta; // Rotation around sun 传入rotate（）
  float diameter; // Size of planet   ，大小
  float distance; // Distance from sun  ， 传入translate（）
  float orbitspeed; // Orbit speed ， 传入rotate（）
  Planet(float distance_, float diameter_) {
    distance= distance_;
    diameter= diameter_;
    theta = 0;
    orbitspeed = random(0.01, 0.03);
  }
  void update() {
    // Increment the angle to rotate
    theta +=orbitspeed;
  }
  void display() {
    pushMatrix();
    rotate(theta); // rotate orbit
    translate(distance, 0); // translate out distance
    stroke(0);
    fill(175);
    ellipse(0, 0, diameter, diameter);
    // Afer we are done, restore matrix!
    popMatrix();
  }
}
```

#### Exercise 14-10

#### Exercise 14-11

### 总结：做一个生物系统。（非常重要） P271
::: error 重要
 非常重要的一个练习。
:::
用佩林噪声控制生物运动
用振荡模拟生物呼吸
用递归设计生物
用顶点形状来设计自定义多边形
用回转来描述生物行为

## -------------lessin7 pixel-------------
## 15，Images P274 长处在于交互和实时（动画）
**开始**→用图来做动画→写过滤器除了图片→图片数组→更多的像素→图像处理介绍→第二个图像处理→直接写图片上的像素→像素组→创意
![](/docs/images/2020-12-24-18-03-07.png) 把图片添加进来才行。
```java
// Declaring a variable of type PImage
PImage img;
void setup() {
  size(320, 240);
  // Make a new instance of a PImage by loading an image file
  img = loadImage( "1-2-i.png" ); 
}
void draw() {
  background(0);
  image(img, 0, 0); //  显示图片。
}
```

开始→**用图来做动画**→写过滤器除了图片→图片数组→更多的像素→图像处理介绍→第二个图像处理→直接写图片上的像素→像素组→创意


## 16，Video P294
开始→直播视频流→播放视频文件→软件镜像→计算机视觉算法（重要！）→ 去除（替换）背景→动态感知，颜色跟踪→计算机视觉库。→ 程序放到web上得用applet沙盒

### 总结：作业
做一个计算机视觉做一个软件镜子。


## -------------lessin8 IO-------------
## 17，Text P324
- 图形用字符的形式显示。
介绍字符串→显示字符串→字符串动画→字符马赛克→字符旋转→逐个字符显示（得不同）

## 18，DataInput  P344 
- 解析字符串
操作字符串→截取和连结→读写text文件→text解析（XML）→字符串分析（分词）→异步请求→XML基础→使用XML库→用yahooAPI来搜索→沙盒程序放到applet
 
## 19，Data Streams  P376

同步异步 → 创建服务器 → 创建客户端 → 广播 → 多用户交互：server → 多用户交互：client → 多用户交互：一起 → 串口通讯 → 串口握手 → 串口字符串 → 

### 总结： 用文件或串口读数据，并做成可视化数据。




## ------ lessin9 Making Noise----
## 20，Sound P398
简单声音 → sonia和minim → 基本声音回放 → 操作声音 → 音频传感器（麦克？） → 音量门槛 → 

## 21，Exporting P416 展示你写的程序
web applet → 单个application → 高分辨率图片PDF → 保存某帧图片 → 用保存的图片制作电影 → 

## -----lessin10-----
## 22，Advance OOP P409

## 23，Java P423