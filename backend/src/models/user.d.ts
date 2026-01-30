import { Document } from "mongoose";
export interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    comparePassword(candidate: string): Promise<boolean>;
}
declare const _default: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=user.d.ts.map