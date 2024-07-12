import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, messages, userName } = props;

    const chat = chats && chats[activeChat];
    console.log(chat,userName,messages);
    return (
        <div>
            ChatFeed
        </div>
    )
}

//comment

export default ChatFeed
