
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Node {
    id: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export class User implements Node {
    id: string;
    name: string;
}
