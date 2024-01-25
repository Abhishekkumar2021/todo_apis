class ApiResponse {
    constructor(statusCode, message, data) {
        this.status = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
    }
}
export default ApiResponse;
