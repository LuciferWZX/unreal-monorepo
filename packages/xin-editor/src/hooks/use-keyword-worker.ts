import { useEffect, useRef } from 'react';
import KeywordWorker from '../workers/keyword.worker?worker&inline';
interface WorkerAction {
  terminate: () => void;
  send: <T, C = void>(
    params: { channel: string; data: T },
    option?: StructuredSerializeOptions
  ) => void;
}
const useKeywordWorker = (): [Worker | undefined, WorkerAction] => {
  const workerRef = useRef<Worker>();
  useEffect(() => {
    workerRef.current = new KeywordWorker();
    workerRef.current.onmessage = function (evt: MessageEvent<string>) {};
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);
  const actions: WorkerAction = {
    terminate: () => {
      workerRef.current?.terminate();
    },
    send: (params, option) => {
      if (!workerRef.current) {
        throw Error('worker:', workerRef.current);
      }
      workerRef.current.postMessage({ ...params }, option);
    },
  };
  return [workerRef.current, actions];
};
export default useKeywordWorker;
