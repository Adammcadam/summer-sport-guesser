class SceneMain extends Phaser.Scene {
    constructor() {
        super('game');
    }
    preload() {
        var image_list = ['archery', 'baseball', 'basketball', 'canoeing', 'climbing', 'cricket', 'cycling',
                          'fishing', 'football', 'golf', 'kayaking', 'lacrosse', 'nfl', 'pool', 'running',
                          'showjumping', 'skateboarding', 'surfing', 'swimming', 'tennis', 'volleyball',
                          'wakeboarding', 'waterpolo', 'weightlifting', 'whitewaterrafting', 'windsurfing', 'yoga']
        var i;
        for (i = 0; i < image_list.length; i++) {
            this.load.image(image_list[i], 'images/'+image_list[i]+'.jpg');
        }

    }
    create() {
        this.add.image(400, 300, 'weightlifting');
    }
    update() {

    }
}
