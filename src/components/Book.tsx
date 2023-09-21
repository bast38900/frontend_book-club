import { IBook } from '../types/data';
export const Book = (props: IBook) => (
  <>
    <br/>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <h3>{props.author}</h3>
    <br/>
  </>
)