import Image from "next/image";
export default function ChatApp() {
  return (
    <div className="font-sans bg-gray-100 w-full">
      <div className="w-[100%] bg-white shadow-lg relative">
        <div className="w-full bg-gray-200 p-2">
          <h1 className="text-xl font-semibold">Group Chat</h1>
        </div>
        <div className="chat-messages p-3 h-[400px] overflow-y-auto pb-[70px]">
          <div className="flex items-start">
            <div className="w-[30px] h-[30px] mr-2 relative mt-3">
              <Image
                className="rounded-full"
                src="/images/demo-profile-image.jpg"
                objectFit="cover"
                width="30"
                height="30"
                alt="profile-demo-image"
              />
            </div>
            <div className="w-1/2">
              <p className="ml-3 text-[10px] text-gray-300 font-mono">
                Shaikat
              </p>
              <div className="mb-2 rounded-br-2xl rounded-tr-2xl rounded-bl-2xl p-2 px-3 py-2 bg-blue-100 shadow-md font-serif text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit
              </div>
            </div>
          </div>
          <div className="flex justify-end items-start">
            <div className="w-[30px] h-[30px] mr-2 relative mt-3">
              <Image
                className="rounded-full"
                src="/images/demo-profile-image.jpg"
                objectFit="cover"
                width="30"
                height="30"
                alt="profile-demo-image"
              />
            </div>
            <div className="w-1/2">
              <p className="ml-3 text-[10px] font-mono text-gray-300">
                Ashikujjaman Shaikat
              </p>
              <div className="rounded-bl-2xl rounded-br-2xl rounded-tr-2xl p-2 py-2 flex bg-blue-300 font-serif shadow-md text-gray-600">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input mt-4 p-3 absolute bottom-0 flex w-full bg-gray-100">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 border-gray-300 rounded-none rounded-tl-lg rounded-bl-lg focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-br-lg rounded-tr-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
