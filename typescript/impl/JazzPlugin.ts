import { BasePlugin } from '../BasePlugin';

export class JazzPlugin implements BasePlugin {

    setup(): void{
        console.log("Relax, setting up...");
    }
    step1(): void{
        console.log("Fine tunning equalizer");
    }
    step2(): void{
        console.log("Playing jazz");
    }
    teardown(): void{
        console.log("Volume down, stop jazz");
    }
}