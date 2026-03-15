import { useContext } from 'react';
import { EditorContext } from '@/context';

export const useEditor = () => {
  const context  = useContext(EditorContext);
  if (!context ) {
    throw new Error('useTask должен использоваться внутри TaskProvider')
  }
  return context
};