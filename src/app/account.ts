import { Transaction } from './transaction';

export class Account {
    public id : Number;
    public name : string;
    public transactions : Transaction[]
}