import { Room } from './interfaces';

export class Hotel {
  constructor(
    public id: string,
    public name: string,
    public address: string,
    public image: string,
    public rooms?: Room[]
  ) {}
}
