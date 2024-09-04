export interface BasePlugin {
    setup(): void;
    step1(): void;
    step2(): void;
    teardown(): void;
}