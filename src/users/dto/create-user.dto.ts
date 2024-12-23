import { IsEmail, IsString, MaxLength, MinLength, Matches, IsEnum } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Password too weak'})
    password: string;

    @IsEnum(['aluno', 'professor', 'admin'])
    role: 'aluno' | 'professor' | 'admin';
}
