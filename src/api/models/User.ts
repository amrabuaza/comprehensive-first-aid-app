/**
 * name: User.ts
 * desc: The user model.
 */

/**
* type checking.
*/
interface UserProperties {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
};

/**
 * An User model.
 */
class User {

    /**
     * local variables.
     */
    username: string = '';
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    phoneNumber: string = '';
    createdAt: string = '';

    constructor(obj: UserProperties) {
        this.setAttributes(obj);
    };

    setAttributes = (obj: UserProperties) => {
        for (let key in obj) {
            this[key] = obj[key];
        }
    };
};

/**
 * export as default.
 */
export default User;