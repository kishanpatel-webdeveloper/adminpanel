import { serializeAs, deserializeAs } from 'cerialize';
import { Role } from './Role';

export class User {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: number;

  @serializeAs('email')
  @deserializeAs('email')
  private _email: string;

  @serializeAs('password')
  @deserializeAs('password')
  private _password: string;

  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('lastName')
  @deserializeAs('lastName')
  private _lastName: string;

  @serializeAs('role')
  @deserializeAs('role')
  private _role: Role;

}
