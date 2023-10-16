import Link from "next/link";

export default function ChatApp() {
  return (
    <div className="font-sans bg-gray-100 w-full">
    <div className="w-[100%] bg-white shadow-lg min-h-[500px] relative">
        <div className="w-full bg-gray-200 p-2 mb-4">
            <h1 className="text-xl font-semibold">Group Chat</h1>
        </div>
        <div className="chat-messages overflow-y-auto h-full p-3">
         
            <div className="w-1/3 mt-5 mb-2 rounded-2xl p-2 px-5 py-2 bg-blue-100 shadow-md font-mono text-gray-600">All user</div>
            <div className="w-1/3 rounded-2xl p-2 py-2 flex bg-blue-300 shadow-md mt-5 mr-5 mb-5 ml-auto font-mono text-gray-600">Single UserSingle UserSingle UserSingle UserSingle UserSingle UserSingle UserSingle UserSingle UserSingle UserSingle User</div>
          
        </div>
        <div className="chat-input mt-4 p-3 absolute bottom-0 flex w-full bg-gray-100">
            <input type="text" placeholder="Type a message..." className="w-full p-2 border-gray-300 rounded-none rounded-tl-lg rounded-bl-lg focus:outline-none"/>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-br-lg rounded-tr-lg">Send</button>
        </div>
    </div>
</div>
  );
}