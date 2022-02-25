import { inject, singleton } from "tsyringe";
import { IService } from "./service";

export interface IRepo {
	save(data: string): void
}

@singleton()
export class Repo implements IRepo {

	constructor(
		@inject('Service')
		private readonly service: IService
	) { }

	save(data: string): void {
		const changedData = this.service.doSomething(data);
		console.log(changedData);
	}
}
