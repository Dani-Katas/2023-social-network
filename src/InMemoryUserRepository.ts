import { User } from "./User.js";

export class InMemoryUserRepository {
	exists(username: string) {
		throw new Error("Unimplemented method InMemoryUserRepository#exists");
	}
	save(user: User) {
		throw new Error("Unimplemented method InMemoryUserRepository#save");
	}
}
