
export interface Transaction {
    Payment : string;
    Date: string;
    UserIban: string;
    SequenceNumber : number;
    BalanceAfter: string;
    Description: string;
    NameCounterParty: string;
    tag: string;
}