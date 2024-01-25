class ApiError extends Error {
    status: number;
    data: any;
    message: string;
    success: boolean;
    errors: any;
    stack: any;

    constructor(statusCode: number, message: string, errors?: any, stack?: any) {
        super(message);
        this.status = statusCode;
        this.data = null;
        this.errors = errors;
        this.message = message;
        this.success = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
