import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
interface AddJournalBody {
    moodScore: number;
    text: string;
}
export declare function addJournal(req: AuthRequest<{}, {}, AddJournalBody>, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * GET /api/journals/list?from=2025-01-01&to=2025-01-31
 */
export declare function listJournals(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * GET /api/journals/today
 */
export declare function getTodayJournal(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=journalController.d.ts.map