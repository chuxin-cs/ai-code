// outher
import { cn } from '@/utils';

const IconButton = ({ children, className, style, onClick }) => {
  return (
    <button
      type='button'
      style={style}
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-500/10',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
