export default class Logger {

    public static log(message: string): void {
        console.log(message);
    }

    public static error(message: string): void {
        console.error(message);
    }

    public static warn(message: string): void {
        console.warn(message);
    }

    public static info(message: string): void {
        console.info(message);
    }

}