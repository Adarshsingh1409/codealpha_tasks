export class AppError extends Error {
    statusCode;
    details;
    code;
    constructor(statusCode, message, details, code) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        this.code = code;
        this.name = 'AppError';
    }
}
