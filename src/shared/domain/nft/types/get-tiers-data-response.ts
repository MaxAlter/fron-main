export interface GetTiersDataResponse {
    success: boolean;
    exit_code: number;
    stack: Stack[];
}

interface CellStack {
    type: 'cell';
    cell: string;
}

interface NumberStack {
    type: 'number';
}

type Stack = CellStack | NumberStack;