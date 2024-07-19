export default class ResponseHandler {

    public errors: string[] = [];
    public ok: boolean = false;
    private _response: Response;

    constructor(response: Response) {

        this._response = response;

    }

    public handleResponse = () => {

        this.ok = this._response.ok;

        if (this.ok) {

            this.errors = [];

            return this._response;

        } else {

            this.errors.push(`
                Status: ${this._response.status},
                Status Text: ${this._response.statusText},
                URL: ${this._response.url}

            `);

            return this.errors;

        }

    }

}