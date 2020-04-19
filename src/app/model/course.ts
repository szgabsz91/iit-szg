import { Lab } from './lab';

export interface Course {
  readonly id: string;
  readonly name: string;
  readonly labs: Lab[];
}
