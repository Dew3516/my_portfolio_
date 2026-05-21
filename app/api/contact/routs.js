export async function POST(req) {
try {
const { name, email, message } = await req.json();
if (!name || !email || !message) {
return new Response(JSON.stringify({ error: true, message: "All fields required" }), { status: 400 });
}


// TODO: hook up to email provider / database


return new Response(JSON.stringify({ success: true, message: "Message received" }), { status: 200 });
} catch (err) {
return new Response(JSON.stringify({ error: true, message: "Server error" }), { status: 500 });
}
}