/**
 * name: InstructionStep.ts
 * desc: The instructionStep model.
 */

/**
* type checking.
*/
interface InstructionStepProperties {
    step: string;
};

/**
 * An InstructionStep model.
 */
class InstructionStep {

    /**
     * local variables.
     */
    step: string = '';

    constructor(obj: InstructionStepProperties) {
        this.setAttributes(obj);
    };

    setAttributes = (obj: InstructionStepProperties) => {
        for (let key in obj) {
            this[key] = obj[key];
        }
    };
};

/**
 * export as default.
 */
export default InstructionStep;