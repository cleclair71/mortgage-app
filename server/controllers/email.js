import dotenv from 'dotenv';
import axios from 'axios'
import { transporter, mailOptions } from '../config/nodemailer.js';
import { generateEmailContent } from '../utils/generateEmailContent.js';
dotenv.config();

// Sending api request to Beehiiv to add this signed up user to newsletter. Placed in the backend so we don't expose any api keys in frontend
export const subscribe = async(req, res) => {

    const options = {
        method: 'POST',
        url: `https://api.beehiiv.com/v2/publications/${process.env.PUBLIC_ID}/subscriptions`, 
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`, 
        },
        data: {
          email: req.body.email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'registration from website',
          utm_campaign: 'Main Mortgage',
          utm_medium: 'organic',
          referring_site: 'insert mortgage site url',
          custom_fields: [
            { name: 'First Name', value: 'insert first name' },
            { name: 'Last Name', value: 'insert last name' },
          ],
        },
    }

    try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
}

export const sendMail = async(req, res) => {
    console.log(req.body)
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: `New Message From ${data.name}`,
      });

      return res.status(200).json({success: true})
    } catch (err) {
      console.log(err.message)
      return res.status(400).json({ message: err.message })
    }

}