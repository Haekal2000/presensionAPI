export const Respond = (status, message, data, innerMessage) =>{
    return {
        status: status,
        message: message,
        data: data,
        innerMessage: innerMessage
    }
}