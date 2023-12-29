import User from '../models/user.js' 
import { Request, Response, NextFunction } from "express";

const databaseMiddlewares = {

  fetchUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = await User.findOne({})
      res.locals.userData = userData
      return next()
    }
    catch(err) {
      throw new Error('an error occured fetching user data')
    }
  },

  updateUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedData = req.body
      await User.findOneAndUpdate(
        {},
        {$set: updatedData}
        )
      return next()
    }
    catch(err) {
      throw new Error('an error occured fetching user data')
    }
  },

  completeTodo: async (req: Request, res: Response, next: NextFunction ) => {
    try {
      const todo: string = req.body.text
  
      await User.findOneAndUpdate(
        {'todos.text': todo},
        {$set: {
          'todos.$.completed': true
        }},
        {new: true}
      )
      return next()
    }
    catch(err) {
      throw new Error('an error occured updating todo')
    }
  },

  deleteTodo: async (req: Request, res: Response, next: NextFunction ) => {
    try {
      const todo = req.body.text
      await User.findOneAndUpdate(
        {},
        {$pull: {
          todos: {text: todo}
        }},
        {new: true}
      )
      return next()
    }
    catch(err) {
      throw new Error('an error occured updating todo')
    }
  },

  createTodo: async (req: Request, res: Response, next: NextFunction ) => {
    try {
      const todo = req.body
  
      await User.findOneAndUpdate(
        {},
        {$push: {
          todos: todo
        }},
        {new: true}
      )
      return next()
    }
    catch(err) {
      throw new Error('an error occured creating todo')
    }
  },

}

export default databaseMiddlewares