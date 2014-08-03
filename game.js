// TODO: insert AI-classes here

BasicGame.Game = function (game) {

};

var map;
var tileset;
var layer;
var cursors;
var player;

BasicGame.Game.prototype = {

  create: function () {

    //this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sea');
    
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#787878';

    map = this.add.tilemap('map');

    map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

    // map.setCollisionBetween(15, 16);
    // map.setCollisionBetween(20, 25);
    // map.setCollisionBetween(27, 29);
    // map.setCollision(40);
    
    layer = map.createLayer('layer1');

    //  Un-comment this on to see the collision tiles
    // layer.debug = true;

    layer.resizeWorld();

    player = this.add.sprite(8, 8, 'checker');

    this.physics.enable(player);

    this.physics.arcade.gravity.y = 250;

    player.body.bounce.y = 0.2;
    player.body.linearDamping = 1;
    player.body.collideWorldBounds = true;

    this.camera.follow(player);

    cursors = this.input.keyboard.createCursorKeys();
  },

  update: function () {
    // this.physics.arcade.collide(player, layer);

    // player.body.velocity.x = 0;

    // if (cursors.up.isDown)
    // {
    //     if (player.body.onFloor())
    //     {
    //         player.body.velocity.y = -200;
    //     }
    // }

    // if (cursors.left.isDown)
    // {
    //     player.body.velocity.x = -150;
    // }
    // else if (cursors.right.isDown)
    // {
    //     player.body.velocity.x = 150;
    // }
  },
  
  // Create-related functions
  
  // Update-realted functions
  
  render: function () {
    // this.debug.body(player);
    //this.debug.bodyInfo(player, 32, 320);
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
