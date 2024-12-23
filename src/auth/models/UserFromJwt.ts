export class UserFromJwt {
  id: number;
  email: string;
  name: string;
  role: "aluno" | "professor" | "admin";
}
