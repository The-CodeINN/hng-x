import { Command, CommandInput } from '@/components/ui/command';
import { cn } from '@/lib/utils';

type SearchInputProps = {
  className?: string;
};

const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <div>
      <Command
        className={cn(
          'bg-transparent border-2 md:w-full md:min-[900px]:w-[500px]',
          className
        )}
      >
        <CommandInput
          className='border-none text-white'
          placeholder='What do you want to watch?'
        />
      </Command>
    </div>
  );
};

export default SearchInput;
