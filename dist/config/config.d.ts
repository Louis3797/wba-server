declare const config: {
    readonly node_env: string;
    readonly app: {
        readonly port: string;
        readonly host: string;
    };
    readonly cors: {
        readonly origin: string;
    };
};
export default config;
