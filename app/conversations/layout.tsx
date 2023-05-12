import getConversations from '../actions/getConversations';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';

type Props = {
  children: React.ReactNode;
};

export default async function ConversationLayout({ children }: Props) {
  const conversations = await getConversations();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <ConversationList initialItems={conversations} />

      <div className='h-full '>{children}</div>
    </Sidebar>
  );
}
