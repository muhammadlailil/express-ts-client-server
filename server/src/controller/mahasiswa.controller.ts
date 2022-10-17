import { NextFunction, Request, Response } from "express";
import { faker } from '@faker-js/faker/locale/id_ID';


export const listMahasiswa = (req: Request, res: Response, next: NextFunction) => {
    try {
        const randomLength = Math.floor(Math.random() * 101); // 0 - 100
        let mahasiswa = []
        for (let i = 0; i < randomLength; i++) {
            mahasiswa.push({
                _id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                class: faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E']),
                score: Math.floor(Math.random() * 101)
            })
        }
        res.json(mahasiswa)
    } catch (err) {
        next(err)
    }
}