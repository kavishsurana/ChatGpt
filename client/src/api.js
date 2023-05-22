// export const fetchResponse = async(chat) => {
//     try {
//         console.log(message)
//         // console.log(chat)
//         const temp = []
//         const response = await fetch('http://localhost:3080/' , {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
                
//                 messages: chat.map((message) =>console.log(chat)).json("\n")
//             })
            
            
//         })

//         const data = await response.json()
//         return data
//     } catch (err) {
//         console.log(err)
//     }
// }




export const fetchResponse =  async(chat) => {
    try {
        console.log(chat)
        // after depoloyment you should change the fetch URL below
        const response = await fetch('http://localhost:3080', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message)=> message.message).join(" \n ")
            })
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}