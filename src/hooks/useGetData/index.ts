import { useCallback, useEffect, useRef, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import db from '@/firebase';

import type { UseGetDataParams } from './index.types';
import { MAX_RETRIES } from './index.constants';

const useGetData = <T>({
  collectionName,
  skip,
  onCompleted,
}: UseGetDataParams<T[]>) => {
  const [data, setData] = useState<T[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const totalHitRef = useRef(0);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const querySnapshot = await getDocs(collection(db, collectionName));
    if (!querySnapshot.empty) {
      const dataDB = querySnapshot.docs.map(
        (doc) => ({ autoId: doc.id, ...doc.data() } as T)
      );
      setData(dataDB);
      if (onCompleted) onCompleted(dataDB);
    }

    setLoading(false);
    totalHitRef.current += 1;
  }, [collectionName, onCompleted]);

  useEffect(() => {
    if (
      !collectionName ||
      data ||
      skip ||
      loading ||
      totalHitRef.current >= MAX_RETRIES
    )
      return;
    fetchData();
  }, [collectionName, data, fetchData, loading, skip]);

  return { data, loading };
};

export default useGetData;
