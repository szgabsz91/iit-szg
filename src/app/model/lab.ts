import { LabTitle } from './lab-title';

export interface Lab {
  readonly courseId?: string;
  readonly index: number;
  readonly titles: LabTitle;
  readonly description: string;
  readonly keywords: readonly string[];
}
