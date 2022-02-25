import { injectable } from "tsyringe";

export interface IService {
	doSomething(data: string): string;
}

@injectable()
export class Service implements IService {
	doSomething(data: string): string {
		return data.toUpperCase();
	}
}
