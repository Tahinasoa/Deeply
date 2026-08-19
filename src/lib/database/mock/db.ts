import { Activity, LearningSessionDocument, LearningSessionProgress, LearningSessionSummary } from "@/types/learning-session";
import { mockSessionSummary } from "./mockSession";
import { mockSessionProgress } from "./mockProgress";
import { mockLearningSessionDocuments } from "./mockSessionDocument";
import { mockActivitiesMCQ } from "./mockmcq";

class Repository {
    async getLearningSessionsSummaries(): Promise<LearningSessionSummary[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockSessionSummary), 200);
        });
    }
    async getLearningSessionsSummary(sessionId: string): Promise<LearningSessionSummary|undefined> {
        const summary = mockSessionSummary.find(s=>(s.id===sessionId));

        return new Promise((resolve) => {
            setTimeout(() => resolve(summary), 200);
        });
    }
    async getLearningSessionDocuments(sessionId: string): Promise<LearningSessionDocument | undefined> {
        const doc = mockLearningSessionDocuments.find(s => (s.id === sessionId));

        return new Promise((resolve) => {
            setTimeout(() => resolve(doc), 200);
        });
    }

    async getLearningSessionProgress(userId: string, sessionId?: string): Promise<LearningSessionProgress[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = mockSessionProgress.filter(
                    (p) => p.userId === userId && (sessionId ? p.learningSessionId === sessionId : true)
                );
                resolve(filtered);
            }, 200);
        });
    }

    async getOneLearningSessionProgress(userId: string, sessionId: string): Promise<LearningSessionProgress | undefined> {
        const results = await this.getLearningSessionProgress(userId, sessionId);
        return results[0];
    }
    async getActivities(sessionId:string) :Promise<Activity[]>{
        const results = mockActivitiesMCQ.filter(a=>a.learningSessionId===sessionId) ;
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(results)}, 300) ;
        })
    }
}

export default Repository; 