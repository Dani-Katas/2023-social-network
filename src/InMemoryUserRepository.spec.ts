import { describe, it, expect } from "vitest"
import { InMemoryUserRepository } from "./InMemoryUserRepository.js"
import { User } from "./User.js"

describe("InMemoryUserRepository", () => {
  it("saves the user in the repository", () => {
    const inMemoryUserRepository = new InMemoryUserRepository()

    inMemoryUserRepository.save(new User("john"))

    const userExists = inMemoryUserRepository.exists("john")
    expect(userExists).toBe(true)
  })
})
