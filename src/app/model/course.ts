import { Lab } from './lab';

export interface Course {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly labs: Lab[];
}
