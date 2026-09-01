import { z } from 'zod';


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


export const zLearningResourceType = z.union([
    z.literal("course"),
    z.literal("exercise"),
    z.literal("exam")
]);
export type LearningResourceType = z.infer<typeof zLearningResourceType>

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
    learningResourceId: z.string(),
    type: zActivityType,
    anchorQuestion: z.string(),
    instruction: z.string(),
    explanation: z.string().optional(),
});

export type ActivityBase = z.infer<typeof zActivityBase>

export const zMCQOption = z.object({
    id: z.string(),
    text: z.string(),
    isCorrect: z.boolean()
});
export type MCQOption = z.infer<typeof zMCQOption>;
export const zMCQActivity = zActivityBase.extend({
    type: z.literal("mcq"),
    options: zMCQOption.array()
});

export type MCQActivity = z.infer<typeof zMCQActivity>;

export const zActivity = z.discriminatedUnion("type", [zMCQActivity]);
export type Activity = z.infer<typeof zActivity>;


export const zLearningResource = z.object({
    id: z.string(),
    title: z.string(),
    grades: zGrade.array(),
    subject: z.string(),
    topic: z.string(),
    type: zLearningResourceType,
    description: z.string().optional(),
    source: z.string().optional(),
    document: z.string().describe("A rich markdown document"),
    correction: z.string().describe("A rich markdown document").optional(),

    activities: zActivity.array()
});

export type LearningResource = z.infer<typeof zLearningResource>

export const zLearningResourceSummary = zLearningResource.omit({
    /* Omit the document, correction, and activities fields for dashboard so
    we don't have to load unnecessary data from the database for all sessions,
    where only the summary information is needed */
    document: true,
    correction: true,
    activities: true
});

export type LearningResourceSummary = z.infer<typeof zLearningResourceSummary>;

export const zLearningResourceDocuments = zLearningResource.pick({
    id: true,
    document: true,
    correction: true
})
export type LearningResourceDocument = z.infer<typeof zLearningResourceDocuments>;