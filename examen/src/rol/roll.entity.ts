import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_rol')
export class RollEntity {

    @PrimaryGeneratedColumn()
    id: number;


}
