import { Document, Types } from "mongoose";
export interface IChatMessage {
    sender: "user" | "bot";
    message: string;
    timestamp: Date;
}
export interface IChatSession extends Document {
    user: Types.ObjectId;
    messages: IChatMessage[];
}
declare const _default: import("mongoose").Model<IChatSession, {}, {}, {}, Document<unknown, {}, IChatSession, {}, {}> & IChatSession & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=chatSession.d.ts.map