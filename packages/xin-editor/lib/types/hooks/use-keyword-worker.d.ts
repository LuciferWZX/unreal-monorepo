interface WorkerAction {
    terminate: () => void;
    send: <T, C = void>(params: {
        channel: string;
        data: T;
    }, option?: StructuredSerializeOptions) => void;
}
declare const useKeywordWorker: () => [Worker | undefined, WorkerAction];
export default useKeywordWorker;
