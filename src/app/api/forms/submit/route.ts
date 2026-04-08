import { NextResponse } from 'next/server';
import { sendSubmissionEmails, type SubmissionPayload, type SubmissionType } from '@/lib/mailer';

export const runtime = 'nodejs';

type SubmissionRequest = {
  submissionType?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
  message?: string;
};

function normalizeField(value: unknown, maxLength: number) {
  if (typeof value !== 'string') {
    return undefined;
  }

  const normalized = value.trim().replace(/\s+/g, ' ');

  return normalized ? normalized.slice(0, maxLength) : undefined;
}

function normalizeMessage(value: unknown, maxLength: number) {
  if (typeof value !== 'string') {
    return undefined;
  }

  const normalized = value.trim();

  return normalized ? normalized.slice(0, maxLength) : undefined;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isSubmissionType(value: string | undefined): value is SubmissionType {
  return value === 'homepage-contact' || value === 'contact-page' || value === 'newsletter';
}

function validateSubmission(body: SubmissionRequest) {
  const submissionType = normalizeField(body.submissionType, 40);

  if (!isSubmissionType(submissionType)) {
    return { error: 'Invalid submission type.' };
  }

  const payload: SubmissionPayload = {
    submissionType,
    name: normalizeField(body.name, 120),
    email: normalizeField(body.email, 160) || '',
    phone: normalizeField(body.phone, 60),
    address: normalizeField(body.address, 160),
    service: normalizeField(body.service, 60),
    message: normalizeMessage(body.message, 4000),
  };

  if (!payload.email || !isValidEmail(payload.email)) {
    return { error: 'Please enter a valid email address.' };
  }

  if (payload.submissionType === 'newsletter') {
    return { payload };
  }

  if (!payload.name) {
    return { error: 'Please enter your name.' };
  }

  if (!payload.message) {
    return { error: 'Please enter a message.' };
  }

  if (payload.submissionType === 'contact-page') {
    if (!payload.phone) {
      return { error: 'Please enter your phone number.' };
    }

    if (!payload.service) {
      return { error: 'Please select a service.' };
    }
  }

  return { payload };
}

export async function POST(request: Request) {
  let body: SubmissionRequest;

  try {
    body = (await request.json()) as SubmissionRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const result = validateSubmission(body);

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    await sendSubmissionEmails(result.payload);

    return NextResponse.json({
      message:
        result.payload.submissionType === 'newsletter'
          ? 'You have been added to the GiGOC updates list.'
          : 'Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('Failed to send form submission email.', error);

    return NextResponse.json(
      { error: 'We could not send your message right now. Please try again in a moment.' },
      { status: 500 },
    );
  }
}
