import Sidebar from '../components/sidebar/Sidebar';
import getUsers from '@/app/actions/getUsers';
import UserList from './components/UserList';
type Props = {
  children: React.ReactNode;
};

export default async function UsersLayout({ children }: Props) {
  const users = await getUsers();
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
