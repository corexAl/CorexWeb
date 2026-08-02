const API_URL =
    import.meta.env.VITE_COREX_API ||
    "http://localhost:8080";


export async function sendMessage(
    prompt: string
): Promise<string> {


    const response =
        await fetch(
            `${API_URL}/v1/chat`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify({
                        prompt
                    })
            }
        );


    const data =
        await response.json();


    return data.response;

}
