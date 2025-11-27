import { IsEmpty, IsInt, IsString, Max, Min } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsEmpty({ message: '不能为空' })
  name: string;

  @IsInt()
  @Min(0)
  @Max(100)
  age: number;

  @IsString()
  breed: string;
}
