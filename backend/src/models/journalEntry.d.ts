import { Document, Types } from "mongoose";
export interface IJournalEntry extends Document {
    user: Types.ObjectId;
    moodScore: number;
    text: string;
    date: Date;
}
declare const _default: import("mongoose").Model<IJournalEntry, {}, {}, {}, Document<unknown, {}, IJournalEntry, {}, {}> & IJournalEntry & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=journalEntry.d.ts.map