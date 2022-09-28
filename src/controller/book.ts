import { error } from 'console';
import {RequestHandler, response} from 'express';
import {book} from '../models/books';

const books:book[]=[];

export const createbook:RequestHandler=(req,res,next)=>{
    const name=(req.body.name as string) ;
    const author=(req.body.author as string);
    const id=Math.random().toString();
    const newbook=new book(name,author,id);
    books.push(newbook);
    res.status(201).json({message:'new book created',createdbook:newbook});
}

export const getbooks:RequestHandler=(req,res,next)=>{
    res.status(200).json({"books":books})
}

export const updatebook:RequestHandler<{id:string}>=(req,res,next)=>{
    const updateid=req.params.id;
    const updatedname=(req.body.name as string);
    const bookindex=books.findIndex(x=>x.id==updateid);
    
    if (bookindex<0){
        throw new Error('could not find book');
    }
    books[bookindex]=new book(updatedname,books[bookindex].author,books[bookindex].id);
    res.status(201).json({message:'book update successfully',updateid:books[bookindex]});    
    

}

export const deletebook:RequestHandler<{id:string}>=(req,res,next)=>{
    const deleteid=req.params.id;
    const deleteindex=books.findIndex(x=>x.id==deleteid);
     
    if(deleteindex<0){
         throw new Error('could not find book');

     }
    
     books.splice(deleteindex,1);
     res.status(201).json({message:"deleted succesfully"})
}