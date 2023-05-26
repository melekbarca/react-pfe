
class Config {
    SOCKET_URL = ""
    API_URL = "http://localhost:8000/api"
    private static instance: Config;
    constructor() { }
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
}

export { Config }
