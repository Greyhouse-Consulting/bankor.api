import { Transaction } from './transaction';

export class Account {
    public id : Number;
    public name : string;
    public balance : number;
    public transactions : Transaction[]
}