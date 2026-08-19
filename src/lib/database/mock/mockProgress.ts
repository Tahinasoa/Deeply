import { LearningSessionProgress } from '@/types/learning-session';
import { z } from 'zod';




export const mockSessionProgress: LearningSessionProgress[] = Array.from(
  { length: 9 },
  (_, index) => ({
    learningSessionId: String(index + 1),
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
