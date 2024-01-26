class ApiResponse {
    status: number;
    data: any;
    message: string;
    success: boolean;

    constructor(statusCode: number, message: string, data: any) {
        this.status = statusCode;
        this.data = data;
        this.message = message;
        this.success = true;
    }
}

export default ApiResponse;