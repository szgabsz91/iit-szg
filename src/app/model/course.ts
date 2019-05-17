import { Lab } from './lab';

export interface Course {
  id: string;
  name: string;
  labs?: Lab[];
}
