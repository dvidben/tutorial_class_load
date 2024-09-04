import { BasePlugin } from '../BasePlugin';

export class RockPlugin implements BasePlugin {

    setup(): void{
        console.log("Get ready, setting up...");
    }
    step1(): void{
        console.log("Setting volume and bass for rock!");
    }
    step2(): void{
        console.log("Playing rock");
    }
    teardown(): void{
        console.log("Volume down, stop rock");
    }
}