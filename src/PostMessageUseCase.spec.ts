import { describe, it, expect } from "vitest"
import { PostMessageUseCase } from "./PostMessageUseCase.js"
import { InMemoryUserRepository } from "./InMemoryUserRepository.js"

describe("PostMessageUseCase", () => {
  it("works", () => {
    const postMessage = new PostMessageUseCase(new InMemoryUserRepository())

    // do stuff
  })
})
