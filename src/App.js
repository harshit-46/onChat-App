import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="ddfdbb2b-8c0d-4f25-95d4-222a66b7adf4"
            userName="Harshit25"
            userSecret="HS461900hs"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App