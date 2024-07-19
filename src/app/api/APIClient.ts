export default class APIClient {
    public client: any;
    private _config?: object;

    constructor(client: any) {
        this.client = client;
    }

    public fetch = async (url?: string, config?: object) => {
        this._config = config ?? {
            headers: {
                'Accept': 'application/json'
            }
        };

        // Ensure that fetch is called correctly
        return await this.client.call(window, url, this._config);
    }
}