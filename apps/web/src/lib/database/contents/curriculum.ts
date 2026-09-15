import { sql, DatabaseError, DataFormatError } from '@/lib/database/shared';

import { z } from 'zod';

export const zEducationalSystem = z.object({
    id: z.string(),
    name: z.string()
});
export type EducationalSystem = z.infer<typeof zEducationalSystem>;

export async function getEducationalSystems(): Promise<EducationalSystem[]> {
    try {
        const sys = await sql`SELECT id,name FROM educational_systems`;

        const parsedSys = z.array(zEducationalSystem).safeParse(sys);
        if (!parsedSys.success) {
            throw new DataFormatError("Failed to parse educational system data", parsedSys.error);
        }
        return parsedSys.data;

    } catch (error) {
        if (error instanceof DataFormatError) {
            console.error("Data format error in getEducationalSystems:", error);
            throw error;
        }
        console.error('Unexpected error in getEducationalSystems:', {
            message: error instanceof Error ? error.message : String(error),
        });

        throw new DatabaseError(
            'Failed to fetch educational systems',
            500
        );
    }
}

export const zGradeLevel = z.object({
    id: z.string(),
    name: z.string()
});
export type GradeLevel = z.infer<typeof zGradeLevel>;


export async function getGradeLevels(educationalSystemId: string): Promise<GradeLevel[]> {

    try {
        const levels = await sql`SELECT id,name FROM grades WHERE system_id = ${educationalSystemId}`;

        const parsedLevels = z.array(zGradeLevel).safeParse(levels);
        if (!parsedLevels.success) {
            throw new DataFormatError("Failed to parse grade level data", parsedLevels.error);
        }
        return parsedLevels.data;

    } catch (error) {
        if (error instanceof DataFormatError) {
            console.error("Data format error in getGradeLevels:", error);
            throw error;
        }
        console.error('Unexpected error in getGradeLevels:', {
            message: error instanceof Error ? error.message : String(error),
        });

        throw new DatabaseError(
            'Failed to fetch grade levels',
            500
        );
    }
}


export const zSubject = z.object({
    id: z.string(),
    name: z.string(),
    url_name: z.string(),
    icon_path: z.string()
});
export type Subject = z.infer<typeof zSubject>;

export async function getSubjects(gradeLevelId: string): Promise<Subject[]> {
    try {
        const subjects = await sql`
        SELECT subjects.id, subjects.name, subjects.url_name, subjects.icon_path from subjects
        INNER JOIN curricula
        on curricula.subject_id=subjects.id
        where curricula.grade_id=${gradeLevelId}`;
        const parsedSubjects = z.array(zSubject).safeParse(subjects);
        if (!parsedSubjects.success) {
            throw new DataFormatError("failed to parse subjects data", parsedSubjects.error);
        }
        return parsedSubjects.data;
    }
    catch (error) {
        if (error instanceof DataFormatError) {
            console.error("failed to parse subjects data in getSubjects", error);
            throw error ;
        }

        console.error('Unexpected error in getSubjects:', {
            message: error instanceof Error ? error.message : String(error),
        });

        throw new DatabaseError(
            'Failed to fetch subjects',
            500
        );
    }
}