import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TaskStatus {
    PENDING = 'pendente',
    IN_PROGRESS = 'em andamento',
    DONE = 'concluído',
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ nullable: true})
    description?: string;

    @Column({ type: 'timestamp'})
    activityDate: Date;

    @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
    status: TaskStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}