/**
 * ResponseHandler Class
 * 
 * This utility class provides a standardized way to process API responses across the application.
 * It wraps the native Response object and provides consistent error handling and response processing.
 * 
 * Key features:
 * - Uniform response handling pattern
 * - Standardized error collection
 * - Simple success/failure determination via the 'ok' property
 * 
 * Designed to work with the API module to create a consistent interface for handling
 * HTTP responses throughout the application.
 */
export default class ResponseHandler {

    /**
     * Collection of error messages encountered during response processing
     */
    public errors: string[] = [];
    
    /**
     * Indicates if the response was successful (matches the Response.ok property)
     */
    public ok: boolean = false;
    
    /**
     * The original Response object being handled
     */
    private _response: Response;

    /**
     * Creates a new ResponseHandler instance
     * 
     * @param response - The fetch API Response object to be processed
     */
    constructor(response: Response) {
        this._response = response;
    }

    /**
     * Processes the response and determines success or failure
     * 
     * If the response is successful (ok = true):
     * - Clears any errors
     * - Returns the original response for further processing (e.g., json(), blob())
     * 
     * If the response is unsuccessful (ok = false):
     * - Populates the errors array with details about the failure
     * - Returns the errors array
     * 
     * @returns The original Response object if successful, or an array of errors if failed
     */
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