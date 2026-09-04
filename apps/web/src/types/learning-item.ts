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


export const zLearningItemType = z.union([
  z.literal("cours"),
  z.literal("exercice"),
  z.literal("examen")
]);
export type LearningItemType = z.infer<typeof zLearningItemType>

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
  learningItemId : z.string(),
  type: zActivityType,
  anchorQuestion: z.string(),
  instruction: z.string(),
  explanation: z.string().optional(),
});

export type ActivityBase = z.infer<typeof zActivityBase>

export const zMCQOption = z.object({
  text : z.string(),
  isCorrect : z.boolean()
}) ;
export type MCQOption = z.infer<typeof zMCQOption> ;
export const zMCQActivity = zActivityBase.extend({
  type : z.literal("mcq") ,
  options : zMCQOption.array()
}) ;

export type MCQActivity = z.infer<typeof zMCQActivity> ;

export const zActivity = z.discriminatedUnion("type",[zMCQActivity]) ;
export type Activity = z.infer<typeof zActivity> ;

export const zAssessmentStatus = z.union([
  z.literal("not_assessed"),
  z.literal("partial"),
  z.literal("completed"),
]);
export type AssessmentStatus = z.infer<typeof zAssessmentStatus>

export const zLearningItem = z.object({
  id: z.string(),
  title: z.string(),
  grades: zGrade.array(),
  subject: z.string(),
  topic : z.string(),
  type: zLearningItemType,
  description: z.string().optional(),
  source: z.string().optional(),
  document : z.string().describe("A rich markdown document"),
  correction : z.string().describe("A rich markdown document").optional(),

  activities: zActivityBase.array()
}) ;
export type LearningItem = z.infer<typeof zLearningItem>

export const zLearningItemSummary = zLearningItem.omit({
  /* Omit the document, correction, and activities fields for dashboard so
  we don't have to load unnecessary data from the database for all items,
  where only the summary information is needed */
  document: true,
  correction: true,
  activities: true
});

export type LearningItemSummary = z.infer<typeof zLearningItemSummary> ;

export const zLearningItemDocuments = zLearningItem.pick({
  id : true,
  document : true ,
  correction : true
})
export type LearningItemDocument = z.infer<typeof zLearningItemDocuments> ;

export const zLearningItemProgress = z.object({
  learningItemId: z.string(),
  userId: z.string(),
  status: zAssessmentStatus,
  masteryLevel : z.number() // a value between 0 and 100
});
export type LearningItemProgress = z.infer<typeof zLearningItemProgress>