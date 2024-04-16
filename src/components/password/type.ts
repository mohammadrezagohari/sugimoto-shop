export default interface IPassword {
    placeHolder: string;
    value: string;
    onChange: (e: any) => void;
    styles: object;
    className: string;
    rounded: boolean;
}
