import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';

type Props = {
  children: React.ReactNode;
};

export default async function ConversationLayout({ children }: Props) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <ConversationList users={users} initialItems={conversations} />

      <div className='h-full '>{children}</div>
    </Sidebar>
  );
}
