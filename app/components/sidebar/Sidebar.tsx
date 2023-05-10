import getCurrentUser from '@/app/actions/getCurrentUser';
import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';

type Props = {
  children: React.ReactNode;
};

async function Sidebar({ children }: Props) {
  const currentUser = await getCurrentUser();

  return (
    <div className='h-full'>
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
}

export default Sidebar;