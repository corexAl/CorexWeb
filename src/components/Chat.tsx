import {
    useState
} from "react";

import {
    sendMessage
} from "../api/corex";


function Chat() {


    const [input, setInput] =
        useState("");

    const [messages, setMessages] =
        useState<string[]>([]);



    async function send() {

        if (!input)
            return;


        const prompt =
            input;


        setMessages([
            ...messages,
            `You: ${prompt}`
        ]);


        setInput("");


        const response =
            await sendMessage(prompt);


        setMessages(
            previous => [
                ...previous,
                `COREX: ${response}`
            ]
        );

    }



    return (

        <div className="chat">

            <h1>
                COREX
            </h1>


            <div>

                {
                    messages.map(
                        (msg, index) => (

                            <p key={index}>
                                {msg}
                            </p>

                        )
                    )
                }

            </div>


            <input

                value={input}

                onChange={
                    e =>
                    setInput(
                        e.target.value
                    )
                }

                placeholder="Ask COREX..."

            />


            <button onClick={send}>
                Send
            </button>


        </div>

    );

}


export default Chat;
