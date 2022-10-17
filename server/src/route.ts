import express from "express";
import * as mahasiswaController from "@controller/mahasiswa.controller"

export const Route = express.Router();
Route.get('/',(req,res,next)=>{
    res.send('Hello World')
})
Route.get('/mahasiswa',mahasiswaController.listMahasiswa)