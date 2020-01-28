import { serializeAs, deserializeAs } from 'cerialize';

export class Permission {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: number;

  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('routerLink')
  @deserializeAs('routerLink')
  private _routerLink: string;

  @serializeAs('canRead')
  @deserializeAs('canRead')
  private _canRead: Boolean;

  @serializeAs('canCreate')
  @deserializeAs('canCreate')
  private _canCreate: Boolean;

  @serializeAs('canDelete')
  @deserializeAs('canDelete')
  private _canDelete: Boolean;

  @serializeAs('canUpdate')
  @deserializeAs('canUpdate')
  private _canUpdate: Boolean;

  @serializeAs('isParent')
  @deserializeAs('isParent')
  private _isParent: Boolean;

  @serializeAs('children')
  @deserializeAs('children')
  private _children: Permission[];


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter routerLink
     * @return {string}
     */
	public get routerLink(): string {
		return this._routerLink;
	}

    /**
     * Getter canRead
     * @return {Boolean}
     */
	public get canRead(): Boolean {
		return this._canRead;
	}

    /**
     * Getter canCreate
     * @return {Boolean}
     */
	public get canCreate(): Boolean {
		return this._canCreate;
	}

    /**
     * Getter canDelete
     * @return {Boolean}
     */
	public get canDelete(): Boolean {
		return this._canDelete;
	}

    /**
     * Getter canUpdate
     * @return {Boolean}
     */
	public get canUpdate(): Boolean {
		return this._canUpdate;
	}

    /**
     * Getter isParent
     * @return {Boolean}
     */
	public get isParent(): Boolean {
		return this._isParent;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}


    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}


    /**
     * Setter routerLink
     * @param {string} value
     */
	public set routerLink(value: string) {
		this._routerLink = value;
	}

    /**
     * Setter canRead
     * @param {Boolean} value
     */
	public set canRead(value: Boolean) {
		this._canRead = value;
	}

    /**
     * Setter canCreate
     * @param {Boolean} value
     */
	public set canCreate(value: Boolean) {
		this._canCreate = value;
	}

    /**
     * Setter canDelete
     * @param {Boolean} value
     */
	public set canDelete(value: Boolean) {
		this._canDelete = value;
	}

    /**
     * Setter canUpdate
     * @param {Boolean} value
     */
	public set canUpdate(value: Boolean) {
		this._canUpdate = value;
	}

    /**
     * Setter isParent
     * @param {Boolean} value
     */
	public set isParent(value: Boolean) {
		this._isParent = value;
	}


    /**
     * Getter children
     * @return {Permission[]}
     */
	public get children(): Permission[] {
		return this._children;
	}

    /**
     * Setter children
     * @param {Permission[]} value
     */
	public set children(value: Permission[]) {
		this._children = value;
	}



}
