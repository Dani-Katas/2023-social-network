import { InMemoryUserRepository } from "./InMemoryUserRepository.js"

export class PostMessageUseCase {
  constructor(private readonly userRepository: InMemoryUserRepository) {}

  execute(username: string, message: string) {
    throw new Error("Unimplemented method PostMessageUseCase#execute")
  }
}
