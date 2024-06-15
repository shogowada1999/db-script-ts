import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, type Relation } from 'typeorm';
import { Store } from './store.entity.ts';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  store_id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  amount!: number;

  @Column()
  active!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;

  @ManyToOne(() => Store, store => store.items)
  store!: Relation<Store>;
}
