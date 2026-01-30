import { Request, Response } from "express";
interface RegisterBody {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
interface LoginBody {
    email: string;
    password: string;
}
export declare function register(req: Request<{}, {}, RegisterBody>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function login(req: Request<{}, {}, LoginBody>, res: Response): Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=authController.d.ts.map