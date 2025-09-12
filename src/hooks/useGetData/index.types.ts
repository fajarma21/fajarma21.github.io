export interface UseGetDataParams<T> {
  collectionName: string;
  skip?: boolean;
  onCompleted?: (data: T) => void;
}
