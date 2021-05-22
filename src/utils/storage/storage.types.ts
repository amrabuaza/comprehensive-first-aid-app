/**
 * name: storage.types.ts
 * desc: This file contains the storage types.
 */

/**
 * The keys types.
 */
export type Key =
    "@USER_INFO" |
    '@USER';


/**
 * user model.
 */
export type UserType = 'paramedic' | 'user' | 'admin';
export type User = {
    accessToken: string;
    fullName: string;
    type: UserType;
};

/**
 * all storage models.
 */
export type StorageModel =
    string |
    User |
    null;