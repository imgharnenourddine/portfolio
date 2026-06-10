export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buildMailto({
  email,
  subject,
  body,
}: {
  email: string;
  subject: string;
  body: string;
}) {
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${email}?${params.toString()}`;
}

export function buildEmailComposeUrl(email: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}
