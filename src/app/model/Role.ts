import { serializeAs, deserializeAs } from 'cerialize';
import { Permission } from './Permission';

export class Role {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: number;

  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('permissions')
  @deserializeAs('permissions')
  private _permissions: Permission[];


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter permissions
     * @return {Permission[]}
     */
	public get permissions(): Permission[] {
		return this._permissions;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter permissions
     * @param {Permission[]} value
     */
	public set permissions(value: Permission[]) {
		this._permissions = value;
	}


}
