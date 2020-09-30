function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    first = Math.floor(Math.random() * Math.floor(2))
    second = Math.floor(Math.random() * Math.floor(2))

    if (first == 1) {
        player2.turnLeft(rotateAngle);
        player3.turnRight(rotateAngle);
    } else {
        player3.turnLeft(rotateAngle);
        player2.turnRight(rotateAngle);
    }
    player2.accelerate(moveDistance);
    player3.accelerate(moveDistance);


    // if (second == 1) {
    //     player2.accelerate(moveDistance);
    //     player3.decelerate(moveDistance);
    // } else {
    //     player3.accelerate(moveDistance);
    //     player2.decelerate(moveDistance);
    // }

    player1.move();

    player2.move();
    player3.move();




    controls.update();



}