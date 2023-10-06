import { describe, it, expect } from "vitest"
import { SocialNetwork } from "./SocialNetwork.js"
import { RegisterUserUseCase } from "./RegisterUserUseCase.js"
import { PostMessageUseCase } from "./PostMessageUseCase.js"
import { ReadTimelineUseCase } from "./ReadTimelineUseCase.js"
import { InMemoryUserRepository } from "./InMemoryUserRepository.js"

describe("SocialNetwork", () => {
  it("users can posts messages and read timelines", () => {
    const inMemoryUserRepository = new InMemoryUserRepository()
    const socialNetwork = new SocialNetwork(
      new RegisterUserUseCase(inMemoryUserRepository),
      new PostMessageUseCase(),
      new ReadTimelineUseCase(),
    )

    socialNetwork.registerUser("johndoe")
    socialNetwork.postMessage("johndoe", "this is my first post")
    socialNetwork.postMessage("johndoe", "this is my second post")

    const posts = socialNetwork.readTimeline("johndoe")

    expect(posts).toEqual(["this is my second post", "this is my first post"])
  })
})
