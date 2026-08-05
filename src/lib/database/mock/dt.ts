import { SessionProgress, zSession, zSessionProgress } from "@/types/type";
import {z} from 'zod';

class MockDatabase {
    constructor() {
    }

    getSessions(): z.infer<typeof zSession>[] {
        // Mock implementation: return a sample session for demonstration purposes
        return [];
    }

    getSessionProgress(userId: string, sessionId: string): SessionProgress | null {
        // Mock implementation: return a sample session progress for demonstration purposes
        return {
            sessionId: sessionId,
            userId: userId,
            status: "not_assessed",
            masteryLevel: Math.random() * 100 // random mastery level
        };
    }
}

export default MockDatabase;