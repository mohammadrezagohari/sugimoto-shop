export default interface IButton {
    isLoading: boolean;
    title: string;
    onClick: () => void;
    backgroundColor: string;
    styles: object;
    rounded: boolean;
}