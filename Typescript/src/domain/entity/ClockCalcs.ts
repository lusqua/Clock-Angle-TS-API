import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export type ClockCalcsType = {
  id: number;
  hour: number;
  minute: number;
  angle: number;
  created_at: Date;
};

@Entity("clockCalcs")
export class ClockCalcs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hour: number;

  @Column()
  minute: number;

  @Column()
  angle: number;

  @Column()
  created_at: Date;
}
