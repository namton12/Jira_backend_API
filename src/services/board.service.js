import { BoardModel } from '*/models/board.model'
const createNew = async (data)=>{
  try{
    const createdBoard = await BoardModel.createNew(data);
   const getNewBoard = await BoardModel.findOneById(createdBoard.insertedId.toString());
  return getNewBoard;
  }catch (error){
  throw new Error(error)
  }
}
const getFullBoard = async (boardId)=>{
  try{
    const board = await BoardModel.getFullBoard(boardId)
    board.columns.forEach(column =>{
      column.cards = board.cards.filter(c=>c.columnId.toString() === column._id.toString())
    })
    delete board.cards
    console.log(board)
  return board;
  }catch (error){
  throw new Error(error)
  }
}

export const BoardSevice = {
  createNew,
  getFullBoard,
}