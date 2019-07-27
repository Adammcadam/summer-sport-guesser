class SceneMain extends Phaser.Scene {
    constructor() {
        super('game');
    }
    preload() 
    {
        this.load.image('archery', 'images/archery.jpg');
    }
    create() 
    {
        this.add.image(400, 300, 'archery');
    }
    update() 
    {
        
    }
}