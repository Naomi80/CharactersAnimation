class Tableau1 extends Phaser.Scene{
    preload() {
        for (let id = 1; id <= 10; id++) {
            this.load.image('layer' + id, 'Characters/boy/boy_4/PNG/idle2/Layer-' + id + '.png');
        }
    }
    create(){
            /**
             * AnimationIdle2
             * @type  {Phaser.GameObjects.TileSprite}
             */
            this.idle2=this.add.sprite(0,0,'layer').setOrigin(0,0)
            this.anims.create({
                key: 'idle2',
                frames: [
                    {key:'layer-1'},
                    {key:'layer-2'},
                    {key:'layer-3'},
                    {key:'layer-4'},
                    {key:'layer-5'},
                    {key:'layer-6'},
                    {key:'layer-7'},
                    {key:'layer-8'},
                    {key:'layer-9'},
                    {key:'layer-10'},
                ],
                frameRate: 16,
                repeat: -1
            });
            this.layer.play('idle2');

    }
}