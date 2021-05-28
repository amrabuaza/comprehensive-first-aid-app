/**
 * name: InstructionTag.ts
 * desc: The instruction tag model.
 */


/**
* type checking.
*/
interface InstructionTagProperties {
    label: string;
    value: string;
};

/**
 * An Instruction tag model.
 */
class InstructionTag {

    /**
     * local variables.
     */
    label: string = '';
    value: string = '';

    constructor(obj: InstructionTagProperties) {
        this.setAttributes(obj);
    };

    setAttributes = (obj: InstructionTagProperties) => {
        for (let key in obj) {
            this[key] = obj[key];
        }
    };
};

/**
 * export as default.
 */
export default InstructionTag;