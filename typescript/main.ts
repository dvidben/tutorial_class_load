import { BasePlugin } from './BasePlugin';

async function loadClass(modulePath: string): Promise<any> {
    const className = modulePath.split('/').pop();
    const module = await import (modulePath);
    const DynamicClass = module[className];
    if (DynamicClass != null){
        return DynamicClass;
    }
    return null;
}

function isInstance(obj: any): obj is BasePlugin {
    //need to check all methods, to investigate further:
    return  'setup' in obj && typeof obj.setup == 'function' &&
            'step1' in obj && typeof obj.step1 == 'function' &&
            'step2' in obj && typeof obj.step1 == 'function' &&
            'teardown' in obj && typeof obj.step1 == 'function';
}

async function main(){
    try {
        const DynamicClass = await loadClass("./impl/RockPlugin");
        const instance = new DynamicClass();

        if (isInstance(instance)) {
            instance.setup();
            instance.step1();
            instance.step2();
            instance.teardown();
        }
        else {
            console.log("Class does not implement generic plugin")
        }
    }
    catch (error) {
        console.error(error);
    }
}

main();