import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ enum: ['aluno', 'professor', 'admin'], default: 'aluno' })
    role: "aluno" | "professor" | "admin"

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }
}
