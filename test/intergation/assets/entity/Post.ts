import { Entity, PrimaryGeneratedColumn } from 'typeorm-plus';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;
}
