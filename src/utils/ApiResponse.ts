class ApiResponse {
    status: number;
    data: any;
    message: string;
    success: boolean;

    constructor(statusCode: number, message: string, data: any) {
        this.status = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
    }
}

export default ApiResponse;