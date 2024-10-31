interface IFetchCountCallback {
    (count: number): void
};

export default function fetchCount(cb: IFetchCountCallback) {
    cb(0);
};