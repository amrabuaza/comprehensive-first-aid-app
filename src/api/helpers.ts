import { Instruction, InstructionStep, User, ParamedicAddress, InstructionTag } from "./models";

/**
 * Get next link url form response if exists
 * 
 * @param response 
 * @returns next link|Null
 */
function getNextLink(response: any) {
    let nextLink = null;
    if (response.data.data && response.data.data.extra && response.data.data.extra['_links']) {
        let links = response.data.data.extra['_links'];
        if (links.next) {
            nextLink = links.next.href;
        }
    }

    return nextLink;
}

/**
 * Transform tnstruction as convert row to Object of type tnstruction
 * 
 * @param row 
 * @returns instacne form Tnstruction model
 * @see Instruction
 */
function transformInstruction(row: any) {
    return new Instruction({
        id: row.id,
        title: row.title,
        description: row.description,
        url: row.url,
        steps: row.steps ? row.steps.map(transformInstructionStep) : []
    });
}

/**
 * Transform tnstruction step as convert row to Object of type tnstruction step
 * 
 * @param row 
 * @returns instacne form TnstructionStep model
 * @see InstructionStep
 */
function transformInstructionStep(row: any) {
    return new InstructionStep({
        step: row.step
    });
}

/**
 * Transform user as convert row to Object of type user
 * 
 * @param row 
 * @returns instacne form User model
 * @see User
 */
function transformUser(row: any) {
    return new User({
        username: row.username,
        firstName: row.first_name,
        lastName: row.last_name,
        phoneNumber: row.phone_number,
        email: row.email,
        createdAt: row.created_at
    });
}

/**
 * Transform paramedic address as convert row to Object of type paramedic address
 * 
 * @param row 
 * @returns 
 */
function transformParamedicAddress(row: any) {
    if (!row) return null;
    return new ParamedicAddress({
        country: row.country,
        city: row.city,
        region: row.region,
        streetName: row.street_name,
        buildingNumberOrName: row.building_number_or_name,
        floorNumber: row.floor_number,
        apartmentNumber: row.apartment_number,
        latitude: row.longitude,
        longitude: row.latitude,
    });
}

/**
 * Transform tnstruction tag as convert row to Object of type tnstruction tag
 * 
 * @param row 
 * @returns instacne form TnstructionTag model
 * @see InstructionTag
 */
function transformInstructionTag(row: any) {
    return new InstructionTag({
        label: row.name,
        value: row.name
    });
}

export {
    transformInstruction,
    transformInstructionStep,
    getNextLink,
    transformUser,
    transformParamedicAddress,
    transformInstructionTag
}