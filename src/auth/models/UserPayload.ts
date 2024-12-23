export interface UserPayload {
  sub: number;
  email: string;
  name: string;
  role: "aluno" | "professor" | "admin";
  iat?: number;
  exp?: number;
}
