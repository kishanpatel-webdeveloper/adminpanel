import { serializeAs, deserializeAs } from 'cerialize';

export class LoginRequest {

  @serializeAs('username')
  @deserializeAs('username')
  private _username: string;

  @serializeAs('password')
  @deserializeAs('password')
  private _password: string;


    /**
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}


}
