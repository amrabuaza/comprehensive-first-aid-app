import * as ApiTypes from './types';
import getError from './problems';
import Axios from './instance';
import { transformInstruction, getNextLink, transformUser, transformParamedicAddress, transformInstructionTag } from "./helpers";

/**
 * Login 
 * 
 * @param loginForm 
 * @returns user data {accessToken , fullName , userType}
 */
export async function login(loginForm: any): Promise<ApiTypes.General> {
    try {
        const loginResponse = await Axios.post("authorization/login", loginForm);
        return {
            kind: 'OK',
            data: loginResponse.data.data
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status)
        };
    };
};

/**
 * Signup
 * 
 * @param signupForm 
 * @returns user data {accessToken , fullName , userType}
 */
export async function signup(signupForm: any): Promise<ApiTypes.General> {
    try {
        const signupResponse = await Axios.post("authorization/signup", signupForm);
        return {
            kind: 'OK',
            data: signupResponse.data.data
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status),
            errorMessage: e.response.data.message
        };
    };
};

/**
 * Get instructions
 * 
 * @returns list instructions
 */
export async function getInstructions(nextLink?: string): Promise<ApiTypes.GetInstructions> {
    try {
        let targetUrl = "instruction/list";
        if (nextLink) {
            targetUrl = nextLink;
        }

        const instructionsResponse = await Axios.get(targetUrl);

        return {
            kind: 'OK',
            instructions: instructionsResponse.data.data.items.map(transformInstruction),
            nextLink: getNextLink(instructionsResponse)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status)
        };
    };
};

/**
 * Get instructions by tags
 * 
 * @param tags 
 * @returns list instructions
 */
export async function getInstructionsByTags(tags: any): Promise<ApiTypes.GetInstructions> {
    try {

        const instructionsResponse = await Axios.get(`instruction/list-by-tags/${tags.join(",")}`);

        return {
            kind: 'OK',
            instructions: instructionsResponse.data.data.items.map(transformInstruction),
            nextLink: getNextLink(instructionsResponse)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status)
        };
    };
};

/**
 * Get instruction details by id
 * 
 * @param id 
 * @returns 
 */
export async function getInstructionDetails(id: number): Promise<ApiTypes.GetInstruction> {
    try {
        const instructionResponse = await Axios.get(`instruction/get-details/${id}?expand=steps`);
        return {
            kind: 'OK',
            instruction: transformInstruction(instructionResponse.data.data)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status)
        };
    };
};

/**
 * Get current user info
 * 
 * @returns 
 */
export async function getCurrentUserInfo(): Promise<ApiTypes.GetUserInfo> {
    try {
        const userResponse = await Axios.get('user/me');
        return {
            kind: 'OK',
            user: transformUser(userResponse.data.data)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status)
        };
    };
};

/**
 * Update current user info
 * 
 * @param userInfo 
 * @returns 
 */
export async function updateUserInfo(userInfo: any): Promise<ApiTypes.GetUserInfo> {
    try {
        const userResponse = await Axios.put('user/update-info', userInfo);
        return {
            kind: 'OK',
            user: transformUser(userResponse.data.data)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status),
            errorMessage: e.response.data.message
        };
    };
};

/**
 * Change user password
 * 
 * @param userInfo 
 * @returns 
 */
export async function changeUserPassword(passwordForm: any): Promise<ApiTypes.General> {
    try {
        const userResponse = await Axios.patch('user/change-password', passwordForm);
        return {
            kind: 'OK',
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status),
            errorMessage: e.response.data.message
        };
    };
};

/**
 * Get paramedic address
 * 
 * @returns 
 */
export async function getParamedicAddress(): Promise<ApiTypes.GetParamedicAddress> {
    try {
        const userResponse = await Axios.get('paramedic-address/get-my-address');

        return {
            kind: 'OK',
            address: userResponse.data.data ? transformParamedicAddress(userResponse.data.data) : null
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status),
            errorMessage: e.response.data.message
        };
    };
};

/**
 * Update or add paramedic address
 * 
 * @param addressForm 
 * @returns 
 */
export async function updateParamedicAddress(addressForm: any): Promise<ApiTypes.General> {
    try {
        const addressResponse = await Axios.post('paramedic-address/add', addressForm);
        return {
            kind: 'OK',
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status),
            errorMessage: e.response.data.message
        };
    };
}

/**
 * Get instruction tags
 * 
 * @returns list instruction tags
 */
export async function getInstructionTags(): Promise<ApiTypes.GetInstructionTags> {
    try {

        const instructionTagsResponse = await Axios.get("instruction-tag/list");

        return {
            kind: 'OK',
            tags: instructionTagsResponse.data.data.items.map(transformInstructionTag),
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: getError(e.response.status)
        };
    };
};