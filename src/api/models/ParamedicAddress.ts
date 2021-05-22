/**
 * name: ParamedicAddress.ts
 * desc: The ParamedicAddress model.
 */

/**
* type checking.
*/
interface ParamedicAddressProperties {
    country: string;
    city: string;
    region: string;
    streetName: string;
    floorNumber: string;
    buildingNumberOrName: string;
    apartmentNumber: string;
    latitude: number;
    longitude: number;
};

/**
 * An ParamedicAddress model.
 */
class ParamedicAddress {

    /**
     * local variables.
     */
    country: string = '';
    city: string = '';
    region: string = '';
    streetName: string = '';
    buildingNumberOrName: string = '';
    floorNumber: string = '';
    apartmentNumber: string = '';
    latitude: number = 0;
    longitude: number = 0;

    constructor(obj: ParamedicAddressProperties) {
        this.setAttributes(obj);
    };

    setAttributes = (obj: ParamedicAddressProperties) => {
        for (let key in obj) {
            this[key] = obj[key];
        }
    };
};

/**
 * export as default.
 */
export default ParamedicAddress;