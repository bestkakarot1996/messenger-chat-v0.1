import express, {Request, Response, NextFunction} from 'express';


export const hello:any = async (req: Request, res: Response, next: NextFunction) => { 
    try {   
        // console.log('hello app chat')
        res.send('hello app chat')
    } catch (error) {
        console.log(error)
    }
};