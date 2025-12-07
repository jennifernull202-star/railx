import Notification from "@/models/Notification";
import dbConnect from "./dbConnect";
import { sendEmail } from "./sendEmail";

export async function pushNotification({
  userId,
  type,
  title,
  message,
  link,
  email,
}: {
  userId: string;
  type: string;
  title: string;
  message: string;
  link?: string;
  email?: string;
}) {
  await dbConnect();

  await Notification.create({
    userId,
    type,
    title,
    message,
    link: link || "",
  });

  if (email) {
    await sendEmail({
      to: email,
      subject: title,
      html: `<p>${message}</p>${link ? `<p><a href="${link}">View Details</a></p>` : ""}`,
    });
  }
}
