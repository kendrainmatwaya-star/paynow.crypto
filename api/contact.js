export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields."
      });
    }

    // Temporary test response.
    // We will connect this to email/database storage next.
    console.log("CONTACT MESSAGE:", {
      name,
      email,
      phone,
      subject,
      message
    });

    return res.status(200).json({
      success: true,
      message: "Your message was received successfully."
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    });
  }
}
