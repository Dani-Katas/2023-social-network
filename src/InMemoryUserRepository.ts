import { User } from "./User.js"

export class InMemoryUserRepository {
  private users: User[] = []

  exists(username: string) {
    const foundUser = this.users.find((user) => user.hasUsername(username))

    return Boolean(foundUser)
  }
  save(user: User) {
    this.users.push(user)
  }
  fetch(username: string) {
    for (const user of this.users) {
      if (user.hasUsername(username)) {
        return user
      }
    }
  }
}
