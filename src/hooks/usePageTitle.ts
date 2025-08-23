import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Jason Xie | ${title}` : 'Jason Xie';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 