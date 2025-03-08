import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message,phoneNumber,country } = await request.json();
  console.log(phoneNumber);
  
  // Basic validation
  if (!name || !email || !phoneNumber||!message ) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Here you can add logic to store the data (e.g., in a database)
  console.log(`Received message from ${name} (${email}): ${message}`);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const html = `
  <h1>New Contact Form Submission</h1>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>PhoneNumber:</strong> ${country}${phoneNumber}</p>
  <p><strong>Message:</strong></p>
  <p>${message}</p>
`;
  const mailOptions = {
    from: process.env.GMAIL_USER, // Use the authenticated email
    to: process.env.GMAIL_USER, // Your receiving email
    subject: `New Contact Form Submission from ${name}`,
    html
  };

  await transporter.sendMail(mailOptions);
  // Respond back to the client
  return new Response(
    JSON.stringify({ success: "Message sent successfully!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
