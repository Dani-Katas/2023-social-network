import { User } from "./User.js"

export class InMemoryUserRepository {
  exists(username: string) {
    return true
  }
  save(user: User) {}
}
