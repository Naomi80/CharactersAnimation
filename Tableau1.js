class Tableau1 extends Phaser.Scene{
    preload(){
        for(let id=1;id<=10;id++){
            this.load.image('idle-2'+id,'Characters/boy/boy_4/PNG/idle2'+id+'.png');
        }
        create(){
            {Phaser.GameObjects.TileSprite}
            let idle2=this.add.tileSprite(0,0,'idle2').setOrigin(0,1)
        }

    }
}