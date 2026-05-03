export const getContactEmailTemplate = (name: string, email: string, subject: string, message: string): string => {
  const currentYear = new Date().getFullYear();

  return `
    <div style="background-color: #0a0a0a; color: #ffffff; font-family: sans-serif; padding: 40px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid #262626;">
      <div style="margin-bottom: 30px;">
        <div style="background: linear-gradient(135deg, #0070f3 0%, #00dfd8 100%); height: 4px; border-radius: 2px; width: 40px; margin-bottom: 20px;"></div>
        <h2 style="font-size: 24px; font-weight: bold; margin: 0; letter-spacing: -0.025em;">New Message</h2>
        <p style="color: #a3a3a3; font-size: 14px; margin-top: 5px;">From your portfolio contact form</p>
      </div>
      
      <div style="background-color: #171717; border: 1px solid #262626; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
        <div style="margin-bottom: 16px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #737373; margin-bottom: 4px; font-weight: 600;">Name</div>
          <div style="font-size: 16px; color: #e5e5e5;">${name}</div>
        </div>
        
        <div style="margin-bottom: 16px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #737373; margin-bottom: 4px; font-weight: 600;">Email</div>
          <div style="font-size: 16px; color: #00dfd8;"><a href="mailto:${email}" style="color: #00dfd8; text-decoration: none;">${email}</a></div>
        </div>
        
        <div>
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #737373; margin-bottom: 4px; font-weight: 600;">Subject</div>
          <div style="font-size: 16px; color: #e5e5e5;">${subject}</div>
        </div>
      </div>
      
      <div style="background-color: #171717; border: 1px solid #262626; padding: 24px; border-radius: 12px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #737373; margin-bottom: 12px; font-weight: 600;">Message</div>
        <div style="font-size: 15px; line-height: 1.6; color: #d4d4d4;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      
      <div style="margin-top: 40px; text-align: center; border-top: 1px solid #262626; padding-top: 24px;">
        <p style="font-size: 12px; color: #737373; font-family: monospace;">&copy; ${currentYear} darshan.panchal. All rights reserved.</p>
      </div>
    </div>
  `;
};
