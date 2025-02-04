/**
 * Logger utility for consistent logging throughout the application
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private readonly enabledLevels: Record<LogLevel, boolean>;
  private readonly prefix: string;

  constructor() {
    // Enable different log levels based on environment
    const isDev = process.env.NODE_ENV !== 'production';
    
    this.enabledLevels = {
      debug: isDev,
      info: true,
      warn: true,
      error: true
    };
    
    this.prefix = '[Portfolio]';
  }

  /**
   * Log debug message
   */
  debug(message: string, ...args: any[]): void {
    if (this.enabledLevels.debug) {
      console.debug(`${this.prefix} ${message}`, ...args);
    }
  }

  /**
   * Log info message
   */
  info(message: string, ...args: any[]): void {
    if (this.enabledLevels.info) {
      console.info(`${this.prefix} ${message}`, ...args);
    }
  }

  /**
   * Log warning message
   */
  warn(message: string, ...args: any[]): void {
    if (this.enabledLevels.warn) {
      console.warn(`${this.prefix} ${message}`, ...args);
    }
  }

  /**
   * Log error message
   */
  error(message: string, ...args: any[]): void {
    if (this.enabledLevels.error) {
      console.error(`${this.prefix} ${message}`, ...args);
    }
  }
}

// Export a singleton instance
const logger = new Logger();
export default logger;
