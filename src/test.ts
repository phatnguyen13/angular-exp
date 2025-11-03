interface User {
  email: string;
  password?: string;
}

const user: User = {
  email: "test@example.com"
}

console.log(user.password ?? 'hahaha');
