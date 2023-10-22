export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log("body: ", body);

    // Sending the REST Call to localhost:5000/api/v1/get_asset/<Charachter Address>/<Token ID>
    // Sending the request as a GET request
    const response = await fetch(`http://127.0.0.1:5000/api/get_reply`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    // Parsing the response to JSON
    const data = await response.json();

    // Found the name.
    // Sends a HTTP success code
    return res.status(200).json({ data: data });
}