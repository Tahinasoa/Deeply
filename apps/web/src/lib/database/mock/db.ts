import { Activity, LearningItemDocument, LearningItemProgress, LearningItemSummary } from "@/types/learning-item";
import { mockItemSummary } from "./mockItems";
import { mockItemProgress } from "./mockProgress";
import { mockLearningItemDocuments } from "./mockItemDocument";
import { mockActivitiesMCQ } from "./mockmcq";

class Repository {
    async getLearningItemsSummaries(): Promise<LearningItemSummary[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockItemSummary), 200);
        });
    }
    async getLearningItemsSummary(itemId: string): Promise<LearningItemSummary|undefined> {
        const summary = mockItemSummary.find(s=>(s.id===itemId)) ;

        return new Promise((resolve) => {
            setTimeout(() => resolve(summary), 200);
        });
    }
    async getLearningItemsDocuments(itemId: string): Promise<LearningItemDocument | undefined> {
        const doc = mockLearningItemDocuments.find(s => (s.id === itemId));

        return new Promise((resolve) => {
            setTimeout(() => resolve(doc), 200);
        });
    }

    async getLearningItemProgress(userId: string, itemId?: string): Promise<LearningItemProgress[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = mockItemProgress.filter(
                    (p) => p.userId === userId && (itemId ? p.learningItemId === itemId : true)
                );
                resolve(filtered);
            }, 200);
        });
    }

    async getOneLearningItemProgress(userId: string, itemId: string): Promise<LearningItemProgress | undefined> {
        const results = await this.getLearningItemProgress(userId, itemId);
        return results[0];
    }
    async getActivities(itemId:string) :Promise<Activity[]>{
        const results = mockActivitiesMCQ.filter(a=>a.learningItemId===itemId) ;
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(results)}, 300) ;
        })
    }
}

export default Repository; 