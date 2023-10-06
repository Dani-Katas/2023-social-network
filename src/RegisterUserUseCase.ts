import { InMemoryUserRepository } from "./InMemoryUserRepository.js";
import { User } from "./User.js";

export class RegisterUserUseCase {
  private userRepository: InMemoryUserRepository;
  constructor(userRepository: InMemoryUserRepository) {
    this.userRepository = userRepository;
  }
  execute(username: string) {
    this.userRepository.save(new User(username));
  }
}
