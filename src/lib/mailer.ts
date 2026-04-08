import nodemailer from 'nodemailer';
import { companyContact } from '@/data/contact';

export type SubmissionType = 'homepage-contact' | 'contact-page' | 'newsletter';

export type SubmissionPayload = {
  submissionType: SubmissionType;
  name?: string;
  email: string;
  phone?: string;
  address?: string;
  service?: string;
  message?: string;
};

const BRAND_COLORS = {
  primary: '#1e4a95',
  accent: '#2563eb',
  ink: '#12233f',
  muted: '#667085',
  border: '#dbe4f0',
  panel: '#f7faff',
};

const siteUrl = process.env.SITE_URL?.replace(/\/$/, '') || 'https://gigoc.org';
const contactInbox = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER || companyContact.email;
const fromName = process.env.EMAIL_FROM_NAME || 'GiGOC';
const logoUrl = process.env.EMAIL_LOGO_URL || `${siteUrl}/gigoc-white.png`;

let transporter: nodemailer.Transporter | null = null;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function requireEnv(name: 'SMTP_HOST' | 'SMTP_PORT' | 'SMTP_USER' | 'SMTP_PASS') {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const host = requireEnv('SMTP_HOST');
  const port = Number(requireEnv('SMTP_PORT'));
  const user = requireEnv('SMTP_USER');
  const pass = requireEnv('SMTP_PASS');
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

function prettySubmissionType(submissionType: SubmissionType) {
  switch (submissionType) {
    case 'homepage-contact':
      return 'Homepage Contact Form';
    case 'contact-page':
      return 'Contact Page Form';
    case 'newsletter':
      return 'Newsletter Signup';
  }
}

function prettyService(service?: string) {
  switch (service) {
    case 'real-estate':
      return 'Real Estate';
    case 'logistics':
      return 'Logistics';
    case 'manufacturing':
      return 'Manufacturing';
    case 'entertainment':
      return 'Music & Entertainment';
    case 'technology':
      return 'Tech & Innovation';
    case 'general':
      return 'General Enquiry';
    default:
      return service || 'Not specified';
  }
}

function infoRow(label: string, value?: string) {
  if (!value) {
    return '';
  }

  return `
    <tr>
      <td style="padding: 10px 0; width: 140px; color: ${BRAND_COLORS.muted}; font-weight: 600; vertical-align: top;">${escapeHtml(label)}</td>
      <td style="padding: 10px 0; color: ${BRAND_COLORS.ink};">${escapeHtml(value)}</td>
    </tr>
  `;
}

function buildEmailShell({
  eyebrow,
  title,
  intro,
  body,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
}) {
  return `
    <div style="margin: 0; padding: 32px 16px; background: #eff5fb; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width: 640px; margin: 0 auto; overflow: hidden; border: 1px solid ${BRAND_COLORS.border}; border-radius: 24px; background: #ffffff;">
        <div style="padding: 28px 32px; background: linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.accent} 100%); color: #ffffff;">
          <div style="margin-bottom: 20px;">
            <img src="${escapeHtml(logoUrl)}" alt="GiGOC" width="140" style="display: block; max-width: 140px; height: auto;" />
          </div>
          <p style="margin: 0 0 12px; font-size: 12px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #ffffff !important; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 1px rgba(255,255,255,0.2);">${escapeHtml(eyebrow)}</p>
          <h1 style="margin: 0; font-size: 30px; line-height: 1.15; font-weight: 700; color: #ffffff !important; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 1px rgba(255,255,255,0.2);">${escapeHtml(title)}</h1>
          <p style="margin: 14px 0 0; max-width: 520px; font-size: 15px; line-height: 1.7; color: #ffffff !important; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 1px rgba(255,255,255,0.2);">${escapeHtml(intro)}</p>
        </div>

        <div style="padding: 30px 32px;">
          ${body}
        </div>

        <div style="padding: 20px 32px 28px; border-top: 1px solid ${BRAND_COLORS.border}; background: ${BRAND_COLORS.panel};">
          <p style="margin: 0 0 8px; color: ${BRAND_COLORS.ink}; font-size: 14px; font-weight: 700;">Gebah Investment Group Of Companies</p>
          <p style="margin: 0; color: ${BRAND_COLORS.muted}; font-size: 13px; line-height: 1.7;">
            ${escapeHtml(companyContact.address)}<br />
            <a href="mailto:${escapeHtml(companyContact.email)}" style="color: ${BRAND_COLORS.primary}; text-decoration: none;">${escapeHtml(companyContact.email)}</a>
            &nbsp;|&nbsp;
            <a href="tel:${escapeHtml(companyContact.phoneHref)}" style="color: ${BRAND_COLORS.primary}; text-decoration: none;">${escapeHtml(companyContact.phoneDisplay)}</a>
          </p>
        </div>
      </div>
    </div>
  `;
}

function buildInternalNotification(payload: SubmissionPayload) {
  const subject =
    payload.submissionType === 'newsletter'
      ? 'New GiGOC newsletter signup'
      : `New GiGOC enquiry from ${payload.name || payload.email}`;

  const body = `
    <p style="margin: 0 0 22px; color: ${BRAND_COLORS.muted}; font-size: 15px; line-height: 1.7;">
      A new submission has arrived from the GiGOC website. The details are below.
    </p>

    <div style="padding: 22px 24px; border: 1px solid ${BRAND_COLORS.border}; border-radius: 20px; background: ${BRAND_COLORS.panel};">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
        ${infoRow('Source', prettySubmissionType(payload.submissionType))}
        ${infoRow('Name', payload.name)}
        ${infoRow('Email', payload.email)}
        ${infoRow('Phone', payload.phone)}
        ${infoRow('Address', payload.address)}
        ${infoRow('Service', prettyService(payload.service))}
      </table>
      ${
        payload.message
          ? `
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid ${BRAND_COLORS.border};">
              <p style="margin: 0 0 8px; color: ${BRAND_COLORS.muted}; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">Message</p>
              <p style="margin: 0; white-space: pre-wrap; color: ${BRAND_COLORS.ink}; font-size: 15px; line-height: 1.8;">${escapeHtml(payload.message)}</p>
            </div>
          `
          : ''
      }
    </div>
  `;

  const textLines = [
    subject,
    '',
    `Source: ${prettySubmissionType(payload.submissionType)}`,
    payload.name ? `Name: ${payload.name}` : '',
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : '',
    payload.address ? `Address: ${payload.address}` : '',
    payload.service ? `Service: ${prettyService(payload.service)}` : '',
    payload.message ? '' : '',
    payload.message ? `Message:\n${payload.message}` : '',
  ].filter(Boolean);

  return {
    subject,
    html: buildEmailShell({
      eyebrow: 'Website Submission',
      title: subject,
      intro: 'A form on the GiGOC website has just been submitted.',
      body,
    }),
    text: textLines.join('\n'),
  };
}

function buildCustomerReply(payload: SubmissionPayload) {
  if (payload.submissionType === 'newsletter') {
    const subject = 'You are on the GiGOC updates list';

    return {
      subject,
      html: buildEmailShell({
        eyebrow: 'Subscription Confirmed',
        title: 'Thanks for staying connected',
        intro: 'Your email has been added to the GiGOC updates list.',
        body: `
          <p style="margin: 0 0 18px; color: ${BRAND_COLORS.ink}; font-size: 15px; line-height: 1.8;">
            We will use this address to share selected GiGOC news, project updates, mobility announcements, and relevant opportunities from our ecosystem.
          </p>
          <div style="padding: 20px 22px; border-radius: 18px; background: ${BRAND_COLORS.panel}; border: 1px solid ${BRAND_COLORS.border};">
            <p style="margin: 0; color: ${BRAND_COLORS.muted}; font-size: 14px; line-height: 1.8;">
              Subscription email:
              <strong style="color: ${BRAND_COLORS.ink};">${escapeHtml(payload.email)}</strong>
            </p>
          </div>
          <p style="margin: 24px 0 0; color: ${BRAND_COLORS.muted}; font-size: 14px; line-height: 1.8;">
            If this was not you, you can simply ignore this message.
          </p>
        `,
      }),
      text: `Thanks for subscribing to GiGOC updates with ${payload.email}.`,
    };
  }

  const subject = 'We received your message at GiGOC';

  return {
    subject,
    html: buildEmailShell({
      eyebrow: 'Message Received',
      title: 'Thanks for reaching out to GiGOC',
      intro: 'Your message is now with our team, and we will review it as soon as possible.',
      body: `
        <p style="margin: 0 0 18px; color: ${BRAND_COLORS.ink}; font-size: 15px; line-height: 1.8;">
          We have received your enquiry and will get back to you using the details you shared.
        </p>
        <div style="padding: 22px 24px; border: 1px solid ${BRAND_COLORS.border}; border-radius: 20px; background: ${BRAND_COLORS.panel};">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            ${infoRow('Name', payload.name)}
            ${infoRow('Email', payload.email)}
            ${infoRow('Phone', payload.phone)}
            ${infoRow('Service', prettyService(payload.service))}
          </table>
          ${
            payload.message
              ? `
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid ${BRAND_COLORS.border};">
                  <p style="margin: 0 0 8px; color: ${BRAND_COLORS.muted}; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">Your message</p>
                  <p style="margin: 0; white-space: pre-wrap; color: ${BRAND_COLORS.ink}; font-size: 15px; line-height: 1.8;">${escapeHtml(payload.message)}</p>
                </div>
              `
              : ''
          }
        </div>
        <div style="margin-top: 24px;">
          <a href="${siteUrl}/contact" style="display: inline-block; padding: 12px 18px; border-radius: 999px; background: linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.accent} 100%); color: #ffffff; text-decoration: none; font-weight: 700;">
            Visit GiGOC
          </a>
        </div>
      `,
    }),
    text: `Hi ${payload.name || 'there'},\n\nWe received your message and will reply soon.\n\nGiGOC`,
  };
}

export async function sendSubmissionEmails(payload: SubmissionPayload) {
  const mailer = getTransporter();
  const fromAddress = requireEnv('SMTP_USER');
  const internalMessage = buildInternalNotification(payload);
  const customerMessage = buildCustomerReply(payload);

  await Promise.all([
    mailer.sendMail({
      from: `${fromName} <${fromAddress}>`,
      to: contactInbox,
      replyTo: payload.email,
      subject: internalMessage.subject,
      text: internalMessage.text,
      html: internalMessage.html,
    }),
    mailer.sendMail({
      from: `${fromName} <${fromAddress}>`,
      to: payload.email,
      replyTo: contactInbox,
      subject: customerMessage.subject,
      text: customerMessage.text,
      html: customerMessage.html,
    }),
  ]);
}
