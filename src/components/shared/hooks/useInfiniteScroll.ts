import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollProps {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => Promise<void> | void;
  threshold?: number;
  enabled?: boolean;
}

export const useInfiniteScroll = ({
  hasMore,
  loading,
  onLoadMore,
  threshold = 0.1,
  enabled = true,
}: UseInfiniteScrollProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const isLoadingRef = useRef(false);

  const handleLoadMore = useCallback(async () => {
    if (isLoadingRef.current || !hasMore || !enabled) return;

    isLoadingRef.current = true;
    await onLoadMore();
    isLoadingRef.current = false;
  }, [onLoadMore, hasMore, enabled]);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          !loading &&
          !isLoadingRef.current
        ) {
          handleLoadMore();
        }
      },
      { threshold }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading, handleLoadMore, threshold, enabled]);

  const resetInitialLoad = useCallback(() => {
    setIsInitialLoad(true);
  }, []);

  const completeInitialLoad = useCallback(() => {
    setIsInitialLoad(false);
  }, []);

  return {
    loaderRef,
    isInitialLoad,
    isLoadingMore: isLoadingRef.current,
    resetInitialLoad,
    completeInitialLoad,
  };
};
