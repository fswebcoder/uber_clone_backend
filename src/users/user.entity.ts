import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'users'
})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({
        unique: true
    })
    email: string;

    @Column( {
            unique: true
    })

    phone: string;

    @Column({
        nullable: true
    })
    image: string;

    @Column()
    pasword: string;

    @Column({
        nullable: true
    })
    notificationToken: string;

    @Column({
        type: 'datetime', default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column({
        type: 'datetime', default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;


}
