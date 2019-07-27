var game;
window.onload = function()
{
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'phaser-game',
        scene: [SceneMain],
        physics: {
            default: 'arcade',
            arcade: {
                debug: true
            }
        }
    }
    
    game = new Phaser.Game(config);
}