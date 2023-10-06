import { describe, it, expect } from "vitest"
import { InMemoryUserRepository } from "./InMemoryUserRepository.js"
import { User } from "./User.js"

describe("InMemoryUserRepository", () => {
  it("saves the user", () => {
    const inMemoryUserRepository = new InMemoryUserRepository()

    inMemoryUserRepository.save(new User("john"))

    const userExists = inMemoryUserRepository.exists("john")
    expect(userExists).toBe(true)
  })

  it("checks that a user does not exists", () => {
    const inMemoryUserRepository = new InMemoryUserRepository()

    const userExists = inMemoryUserRepository.exists("nonExistentUser")

    expect(userExists).toBe(false)
  })
})
