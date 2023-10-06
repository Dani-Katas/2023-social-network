import { InMemoryUserRepository } from "./InMemoryUserRepository.js";

export class RegisterUserUseCase {
  private userRepository: InMemoryUserRepository;
  constructor(userRepository: InMemoryUserRepository) {
    this.userRepository = userRepository;
  }
  execute(username: string) {
    throw new Error("Unimplemented method RegisterUserUseCase#execute");
  }
}
