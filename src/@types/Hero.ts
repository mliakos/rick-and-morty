import {Location} from './Location';

export type IHero= {
  id: string;
  name: string;
  image: string;
  status: 'Alive' | 'Dead' | 'unknown';
  location: Location;
}

export enum TagColor {
  'Alive' = 'success',
  'Dead' = 'error',
  'unknown' = 'warning'
}
