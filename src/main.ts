import "reflect-metadata";
import { container, inject } from "tsyringe";
import { IRepo, Repo } from "./repo";
import { IService, Service } from "./service";
import { IUseCase, UseCase } from "./use-case";

/** register all services */
container.registerSingleton<IUseCase>('UseCase', UseCase);
container.register<IService>('Service', Service);
container.registerSingleton<IRepo>('Repo', Repo);

export class Main {
	constructor(
		@inject('UseCase')
		private readonly useCase: IUseCase
	) { }
	
	run(data: string): number {
		this.useCase.execute(data);
		return (0);
	}
}
