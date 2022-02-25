import 'reflect-metadata';
import { container } from "tsyringe";
import { Main } from "../main";
import { IUseCase } from "../use-case";

describe('main', () => {
	it('should run with concrete implementation with success', () => {
		
		/** inject concrete use case */
		const useCase = container.resolve<IUseCase>('UseCase');

		const main = new Main(useCase);
		const result = main.run('some text');
		expect(result).toBe(0);
	});

	it('should run with fake implementation with success', () => {
		
		// clear all registered instance
		container.clearInstances();
		
		// mock fake
		const fakeUseCase: IUseCase = {
			execute: jest.fn()
		}

		jest.spyOn(fakeUseCase, 'execute').mockImplementationOnce(
			(data: string) => console.log(`mock ${data}`)
		);

		const main = new Main(fakeUseCase);
		const result = main.run('second case');
		expect(result).toBe(0);
	});
});
