
/**
 * common.
 */

import { Instruction, User, ParamedicAddress, InstructionTag } from "./models";

type Kind = 'OK' | 'REJECTED';

export interface General {
    kind: Kind;
    error?: string;
    data?: any;
    errorMessage?: any;
};

export interface GetInstructions {
    kind: Kind;
    error?: string;
    instructions?: Instruction[];
    nextLink?: string;
};

export interface GetInstruction {
    kind: Kind;
    error?: string;
    instruction?: Instruction;
};

export interface GetUserInfo {
    kind: Kind;
    error?: string;
    user?: User;
    errorMessage?: any;
};

export interface GetParamedicAddress {
    kind: Kind;
    error?: string;
    address?: ParamedicAddress;
    errorMessage?: any;
};

export interface GetInstructionTags {
    kind: Kind;
    error?: string;
    tags?: InstructionTag[];
};