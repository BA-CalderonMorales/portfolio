import Logger from "@/app/utils/logger";
import ResponseHandler from "@/app/utils/responseHandler";
import APIClient from "./APIClient";

interface APIDependencies {

    logger: (message: string) => void | Logger; 

    responseHandler: (response: Response) => void | ResponseHandler;

}

export default class API extends APIClient {

    private _logger?: (message: string) => void | Logger;

    private _responseHandler?: (response: Response) => void | ResponseHandler;

    constructor(dependencies: APIDependencies) {

        let client = window.fetch.bind(window); // Ensure fetch has the correct context

        super(client); // Pass the fetch (or any client) function to the parent class

        this._logger = dependencies.logger;

        this._responseHandler = dependencies.responseHandler;

    }

    private ensureUtilities = () => {

        if (!this._logger) {

            this._logger = (message: string) => console.log(message);

        }

        if (!this._responseHandler) {

            this._responseHandler = (response: Response) => new ResponseHandler(response);

        }

    };

    public downloadFile = async (url: string, linkDownload?: string) => {

        this.ensureUtilities();

        try {

            const response = await this.fetch(url, {

                headers: {
                    'Accept': 'application/vnd.github.v3.raw'
                }

            });

            let interimResponse = this._responseHandler ? this._responseHandler(response) as any : null;


            if (interimResponse.errors.length > 0) {

                this._logger?.('Error downloading the file: ' + interimResponse.errors.join(' '));

                throw new Error('Error downloading the file: ' + interimResponse.errors.join(' '));
            }

            if (interimResponse instanceof ResponseHandler) {

                interimResponse = interimResponse.handleResponse();

                const blob = await interimResponse.blob();

                if (!blob) {

                    this._logger?.('Error downloading the file: The file is empty');

                    throw new Error('Error downloading the file: The file is empty');

                }

                const link = document.createElement('a');

                link.href = URL.createObjectURL(blob);

                link.download = linkDownload ?? 'file';

                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);

                this._logger?.('File downloaded successfully');

            }

        } catch (error) {

            this._logger?.('Error downloading the file: ' + error);

        }
    };
}