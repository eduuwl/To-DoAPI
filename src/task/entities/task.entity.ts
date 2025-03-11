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

    @Column({ name: 'titulo' })
    title: string;

    @Column({ name: 'descricao', nullable: true })
    description?: string;

    @Column({ name: 'data_atividade', type: 'timestamp' })
    activityDate: Date;

    @Column({ name: 'status', type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
    status: TaskStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}