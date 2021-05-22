/**
 * name: Instruction.ts
 * desc: The instruction model.
 */

import InstructionStep from "./InstructionStep";

/**
* type checking.
*/
interface InstructionProperties {
    id: number;
    title: string;
    description: string;
    url: string;
    steps: InstructionStep[];
};

/**
 * An Instruction model.
 */
class Instruction {

    /**
     * local variables.
     */
    id: string = '';
    title: number = -1;
    description: string = '';
    url: string = '';
    steps: InstructionStep[] = [];

    constructor(obj: InstructionProperties) {
        this.setAttributes(obj);
    };

    setAttributes = (obj: InstructionProperties) => {
        for (let key in obj) {
            this[key] = obj[key];
        }
    };
};

/**
 * export as default.
 */
export default Instruction;