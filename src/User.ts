export class User {
  private username: string
  constructor(username: string) {
    this.username = username
  }

  hasUsername(username: string) {
    return this.username === username
  }
  getMessages() {
    return []
  }
}
