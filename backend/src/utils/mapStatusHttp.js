function mapStatusHttp(status) {
    const statusMap = {
        'SUCCESSFUL':  200,
        'INVALID_DATA':  400,
        'NOT_FOUND':  404,
        'CONFLICT':  409,
        'UNAUTHORIZED':  401,
    }
    return statusMap[status] || 500;
}

module.exports = mapStatusHttp;