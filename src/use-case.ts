import { inject, singleton } from "tsyringe";
import { IRepo } from "./repo";

export interface IUseCase {
	execute(data: string): void
}

@singleton()
export class UseCase implements IUseCase {

	constructor(
		@inject("Repo")
		private readonly repo: IRepo
	) { }

	execute(data: string): void {
		this.repo.save(data);
	}
	
}
