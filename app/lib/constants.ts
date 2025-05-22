/* Status Codes */

// success
export const Code_Ok = 200
export const Code_Created = 201
export const Code_Accepted = 202
//  No Content
export const Code_NoContent = 204
// client errors
export const Code_BadRequest = 400
export const Code_Unauthorized = 401
export const Code_PaymentRequired = 402
export const Code_Forbidded = 403
export const Code_NotFound = 404
// server errors
export const Code_InternalServerError = 500
export const Code_NotImplemented = 501
export const Code_BadGateway = 502
export const Code_ServiceUnavailable = 503

// interfaces - Object types
export interface Stream {
    id: string,
    type: string,
    url: string,
    extractedId: string,
    title: string,
    channel: string,
    smallImg: string,
    bigImg: string,
    active: boolean,
    userId: string,
    upvotes: number,
    haveUpvoted: boolean
}