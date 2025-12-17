# 📧 Modern Email Template for Netlify Forms

This is the beautiful, modern HTML email template for LearningBee contact form notifications.

## 🚀 How to Use

1. Go to **Netlify Dashboard** → Your Site → **Site settings** → **Forms** → **Form notifications**
2. Click **Add notification** → Select **Email notification**
3. Configure:
   - **Event to listen for:** `New form submission`
   - **Form name:** `contact`
   - **Email to notify:** Your email address
   - **Email subject:** `🐝 New Inquiry from {{name}} | LearningBee`
   - **Email body:** Copy and paste the HTML template below

---

## 📋 Email Subject Line

```
🐝 New Inquiry from {{name}} | LearningBee
```

---

## 🎨 HTML Email Template

Copy the entire HTML code below and paste it into the "Email body" field in Netlify:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #60A5FA 0%, #FBBF24 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                                🐝 New Project Inquiry!
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.95;">
                                LearningBee Contact Form
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Introduction -->
                    <tr>
                        <td style="padding: 30px 30px 20px 30px;">
                            <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6;">
                                Great news! Someone is interested in your services. Here are the details:
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Contact Information Card -->
                    <tr>
                        <td style="padding: 0 30px 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #EFF6FF; border-left: 4px solid #60A5FA; border-radius: 8px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h2 style="margin: 0 0 15px 0; color: #1F2937; font-size: 18px; font-weight: 600;">
                                            👤 Contact Information
                                        </h2>
                                        
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding: 8px 0; color: #6B7280; font-size: 14px; width: 30%;">
                                                    <strong>Name:</strong>
                                                </td>
                                                <td style="padding: 8px 0; color: #1F2937; font-size: 14px;">
                                                    {{name}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">
                                                    <strong>Email:</strong>
                                                </td>
                                                <td style="padding: 8px 0;">
                                                    <a href="mailto:{{email}}" style="color: #2563EB; text-decoration: none; font-size: 14px;">
                                                        {{email}}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">
                                                    <strong>Phone:</strong>
                                                </td>
                                                <td style="padding: 8px 0; color: #1F2937; font-size: 14px;">
                                                    {{phone}}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Project Description Card -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FFFBEB; border-left: 4px solid #FBBF24; border-radius: 8px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h2 style="margin: 0 0 15px 0; color: #1F2937; font-size: 18px; font-weight: 600;">
                                            💼 Project Details
                                        </h2>
                                        <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.8; white-space: pre-line;">{{message}}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Action Button -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px; text-align: center;">
                            <a href="mailto:{{email}}" style="display: inline-block; background: linear-gradient(135deg, #60A5FA 0%, #FBBF24 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(96, 165, 250, 0.4);">
                                📧 Reply to {{name}}
                            </a>
                        </td>
                    </tr>
                    
                    <!-- Metadata -->
                    <tr>
                        <td style="padding: 20px 30px 30px 30px; border-top: 1px solid #E5E7EB;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="color: #9CA3AF; font-size: 12px; line-height: 1.6;">
                                        <strong>📅 Submitted:</strong> {{created_at}}<br>
                                        <strong>🌐 Form:</strong> {{form_name}}<br>
                                        <strong>🔗 Source:</strong> LearningBee Website
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #1F2937; padding: 25px 30px; text-align: center;">
                            <p style="margin: 0 0 10px 0; color: #F3F4F6; font-size: 16px; font-weight: 600;">
                                LearningBee
                            </p>
                            <p style="margin: 0; color: #9CA3AF; font-size: 13px; font-style: italic;">
                                "don't worry we will see" ✨
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

---

## 📝 Available Variables

- `{{name}}` - Full name of the submitter
- `{{email}}` - Email address of the submitter
- `{{phone}}` - Phone number (if provided)
- `{{message}}` - Project description
- `{{created_at}}` - Submission timestamp
- `{{form_name}}` - Form name (will be "contact")

---

## ✨ Features

- 🎨 **Modern Design** - Gradient header with brand colors
- 📱 **Responsive** - Looks great on all devices
- 🎯 **Clear Layout** - Organized sections with color-coded cards
- 🔘 **Action Button** - One-click reply functionality
- 📊 **Metadata** - Timestamp and source information
- 🐝 **Branded** - Includes LearningBee branding and tagline

---

## 🔧 Setup Instructions

1. Copy the HTML template above
2. Go to Netlify Dashboard → Site Settings → Forms → Form notifications
3. Add new email notification
4. Paste the HTML into the "Email body" field
5. Set subject line: `🐝 New Inquiry from {{name}} | LearningBee`
6. Save and test!

---

**Last Updated:** 2025-01-18

