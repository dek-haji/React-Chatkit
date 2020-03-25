import React from 'react'
import Chatkit from "@pusher/chatkit-client"
import MessageList from "./components/MessageList"
import SendMessageForm from "./components/SendMessageForm"
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'


class App extends React.Component {
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            // instanceLocator,
            userId: 'perborgan',
            tokenProvider: new Chatkit.tokenProvider({
            })
        })
    }


    render() {
        return (
          <div className="app">
                <MessageList />
                <RoomList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default App