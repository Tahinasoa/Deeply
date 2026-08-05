import {z} from 'zod';

export const zGrade = z.union([
  z.literal("6e"),
  z.literal("5e"),
  z.literal("4e"),
  z.literal("3e"),
  z.literal("2nde"),
  z.literal("1ere"),
  z.literal("terminale")
]);
export type Grade = z.infer<typeof zGrade>


export const zSessionType = z.union([
  z.literal("cours"),
  z.literal("exercice"),
  z.literal("examen")
]);
export type SessionType = z.infer<typeof zSessionType>

export const zActivityType = z.union([
  z.literal("mcq"),              // multiple choice question : one correct answer
  z.literal("mcq_multiple"),              // multiple choice question : multiple correct answers
  z.literal("word_rearrange"),   // word rearanging
  z.literal("fill_blank_free"),  // fill in the blank, free text
  z.literal("fill_blank_bank"),  // fill in the blank, word bank
  z.literal("ordering") //ordering of items
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
  z.literal("partially_validated"),
  z.literal("validated"),
]);
export type AssessmentStatus = z.infer<typeof zAssessmentStatus>

export const zSession = z.object({
  id: z.string(),
  title: z.string(),
  grades: zGrade.array(),
  subject: z.string(),
  topic : z.string(),
  type: zSessionType,
  description: z.string().optional(),
  source: z.string().optional(),
  document : z.string().describe("A rich markdown document"),
  correction : z.string().describe("A rich markdown document").optional(),

  activities: zActivityBase.array()
}) ;
export type Session = z.infer<typeof zSession>

export const zSessionProgress = z.object({
  sessionId: z.string(),
  userId: z.string(),
  status: zAssessmentStatus,
  masteryLevel : z.number() // a value between 0 and 100
});
export type SessionProgress = z.infer<typeof zSessionProgress>