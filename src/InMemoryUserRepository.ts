import { User } from "./User.js"

export class InMemoryUserRepository {
  private users: User[] = []

  exists(username: string) {
    const foundUser = this.users.find((user) => user.getUsername() === username)

    return Boolean(foundUser)
  }
  save(user: User) {
    this.users.push(user)
  }
}
