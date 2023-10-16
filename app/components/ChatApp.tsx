import Link from "next/link";

export default function ChatApp() {
  return (
    <div className="font-sans bg-gray-100">
    {/* <div className="w-1/4 p-4 bg-white shadow-lg h-screen">
        <h1 className="text-xl font-semibold mb-4">Users</h1>
        <ul>
            <li className="mb-2">
                <div className="flex items-center">
                    <img src="user1.jpg" alt="User 1" className="w-8 h-8 rounded-full"/>
                    <span className="ml-2">User 1</span>
                </div>
            </li>
            <li className="mb-2">
                <div className="flex items-center">
                    <img src="user2.jpg" alt="User 2" className="w-8 h-8 rounded-full"/>
                    <span className="ml-2">User 2</span>
                </div>
            </li>

        </ul>
    </div> */}

    <div className="w-full p-4 bg-white shadow-lg h-screen">
        <div className="flex items-center justify-between bg-gray-200 p-2 mb-4">
            <h1 className="text-xl font-semibold">Chat with User 1</h1>
            <button className="text-gray-600 hover:text-gray-800">
                <i className="fas fa-times"></i>
            </button>
        </div>
        <div className="chat-messages overflow-y-auto h-4/5">
        </div>
        <div className="chat-input mt-4">
            <input type="text" placeholder="Type a message..." className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"/>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600">Send</button>
        </div>
    </div>
</div>
  );
}