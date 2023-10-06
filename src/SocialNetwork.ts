import { RegisterUserUseCase } from "./RegisterUserUseCase.js";
import { PostMessageUseCase } from "./PostMessageUseCase.js";
import { ReadTimelineUseCase } from "./ReadTimelineUseCase.js";

export class SocialNetwork {
  private registerUserUseCase: RegisterUserUseCase;
  private postMessageUseCase: PostMessageUseCase;
  private readTimelineUseCase: ReadTimelineUseCase;


  constructor(registerUserUseCase: RegisterUserUseCase, postMessageUseCase: PostMessageUseCase, readTimelineUseCase: ReadTimelineUseCase) {
    this.registerUserUseCase = registerUserUseCase;
    this.postMessageUseCase = postMessageUseCase;
    this.readTimelineUseCase = readTimelineUseCase;
  }

  registerUser(username: string) {
    this.registerUserUseCase.execute(username)
  }

  postMessage(username: string, message: string) {
    this.postMessageUseCase.execute(username, message)
  }

  readTimeline(username: string) {
    this.readTimelineUseCase.execute(username)
  }
}
