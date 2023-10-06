import { describe, it, expect } from "vitest";
import { RegisterUserUseCase } from "./RegisterUserUseCase.js";

describe("RegisterUserUseCase", () => {
	it("registers a user in the UserRepository", () => {
		const userRepository = new InMemoryUserRepository();
		const registerUser = new RegisterUserUseCase(userRepository);

		registerUser.execute("john");

		const userExists = userRepository.exists("john");
		expect(userExists).toBeTruthy();
	});
});
