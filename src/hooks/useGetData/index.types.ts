export interface UseGetDataParams<T> {
  collectionName: string;
  orderBy?: [string, 'asc' | 'desc'];
  skip?: boolean;
  onCompleted?: (data: T) => void;
}
