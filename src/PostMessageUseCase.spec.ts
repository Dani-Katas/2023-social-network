import { describe, it, expect } from "vitest"
import { PostMessageUseCase } from "./PostMessageUseCase.js"
import { InMemoryUserRepository } from "./InMemoryUserRepository.js"
import { User } from "./User.js"

describe("PostMessageUseCase", () => {
  it("can post a message and retrieve it", () => {
    let userRepository = new InMemoryUserRepository()
    userRepository.save(new User("john"));
    const postMessage = new PostMessageUseCase(userRepository);

    postMessage.execute("john", "I love the weather today");

    const user = userRepository.fetch("john");
    expect(user.getMessages()[0]).toBe("I love the weather today");
    // do stuff
  })
})
