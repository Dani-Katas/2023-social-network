import { describe, it, expect } from "vitest";
import { SocialNetwork } from "./SocialNetwork.js";

describe("SocialNetwork", () => {
  it("users can posts messages and read timelines", () => {
    const socialNetwork = new SocialNetwork()

    socialNetwork.registerUser("johndoe")
    socialNetwork.postMessage("johndoe", "this is my first post")
    socialNetwork.postMessage("johndoe", "this is my second post")

    const posts = socialNetwork.readTimeline("johndoe");

    expect(posts).toEqual([
      "this is my second post",
      "this is my first post",
    ])
  })
})
