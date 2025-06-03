import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function CashBackLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white mt-2`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> {/* וודא שזה קיים! */}
      <p className="text-[30px] ">International Cash Back</p>
    </div>
  );
}