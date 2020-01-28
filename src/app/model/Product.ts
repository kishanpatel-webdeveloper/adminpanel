import { serializeAs, deserializeAs } from 'cerialize';

export class Product {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: number;

  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

}
