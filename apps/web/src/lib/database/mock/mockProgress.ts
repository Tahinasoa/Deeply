import { LearningItemProgress } from '@/types/learning-item';
import { z } from 'zod';




export const mockItemProgress: LearningItemProgress[] = Array.from(
  { length: 9 },
  (_, index) => ({
    learningItemId: String(index + 1),
    userId: `user`,
    status:
      index % 3 === 0
        ? 'not_assessed'
        : index % 3 === 1
          ? 'partial'
          : 'completed',
    masteryLevel: Math.floor(Math.random() * 101),
  }),
);
