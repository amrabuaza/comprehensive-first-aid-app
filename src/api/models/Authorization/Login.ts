/**
 * name: Authorization Login.ts
 */

/**
* type checking.
*/
interface LoginProperties {
    username: string;
    password: string;
    deviceId: string;
};

/**
 * An Login model.
 */
class Login {

    /**
     * local variables.
     */
    username: string = '';
    password: string = '';
    deviceId: string = '';

    /**
     * 
     * @param {LoginProperties} obj 
     */
    constructor(obj: LoginProperties) {
        this.setAttributes(obj);
    };

    /**
     * 
     * @param {LoginProperties} obj 
     */
    setAttributes = (obj: LoginProperties) => {
        this.username = obj.username;
        this.password = obj.password;
        this.deviceId = obj.deviceId;
    };
};

/**
 * export as default.
 */
export default Login;