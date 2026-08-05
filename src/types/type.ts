import {z} from 'zod';


export const zGrade = z.literal([
  "6e",
  "5e",
  "4e",
  "3e",
  "2nde",
  "1ere",
  "terminale"
]);

export type Grade = z.infer<typeof zGrade>


export const zLearningSessionType = z.union([
  z.literal("cours"),
  z.literal("exercice"),
  z.literal("examen")
]);
export type LearningSessionType = z.infer<typeof zLearningSessionType>

export const zActivityType = z.literal([
  "mcq",             // multiple choice question : one correct answer
  "mcq_multiple",    // multiple choice question : multiple correct answers
  "fill_blank_free",  // fill in the blank, free text
  "fill_blank_bank",  // fill in the blank, word bank
  "ordering",         // ordering of items.
]);
export type ActivityType = z.infer<typeof zActivityType>

export const zActivityBase = z.object({
  id: z.string(),
  type: zActivityType,
  anchorQuestion: z.string(),
  statement: z.string(),
  explanation: z.string().optional(),
});
export type ActivityBase = z.infer<typeof zActivityBase>

export const zAssessmentStatus = z.union([
  z.literal("not_assessed"),
  z.literal("partial"),
  z.literal("completed"),
]);
export type AssessmentStatus = z.infer<typeof zAssessmentStatus>

export const zLearningSession = z.object({
  id: z.string(),
  title: z.string(),
  grades: zGrade.array(),
  subject: z.string(),
  topic : z.string(),
  type: zLearningSessionType,
  description: z.string().optional(),
  source: z.string().optional(),
  document : z.string().describe("A rich markdown document"),
  correction : z.string().describe("A rich markdown document").optional(),

  activities: zActivityBase.array()
}) ;
export type LearningSession = z.infer<typeof zLearningSession>

export const zLearningSessionSummary = zLearningSession.omit({
  /* Omit the document, correction, and activities fields for dashboard so
  we don't have to load unnecessary data from the database for all sessions,
  where only the summary information is needed */
  document: true,
  correction: true,
  activities: true
});

export type LearningSessionSummary = z.infer<typeof zLearningSessionSummary> ;

export const zLearningSessionDocuments = zLearningSession.pick({
  id : true,
  document : true ,
  correction : true
})
export type LearningSessionDocument = z.infer<typeof zLearningSessionDocuments> ;

export const zLearningSessionProgress = z.object({
  learningSessionId: z.string(),
  userId: z.string(),
  status: zAssessmentStatus,
  masteryLevel : z.number() // a value between 0 and 100
});
export type LearningSessionProgress = z.infer<typeof zLearningSessionProgress>