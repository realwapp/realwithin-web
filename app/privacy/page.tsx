import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#3f433f]">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8c928b]">
          Legal
        </p>

        <h1 className="mt-4 font-serif text-5xl tracking-tight text-[#292d29] sm:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-5 text-sm text-[#888d87]">
          Last updated: 3 September 2026
        </p>

        <div className="mt-12 space-y-12 text-[17px] leading-8 text-[#606660]">
          <Intro>
            RealWithin (“RealWithin”, “we”, “us” or “our”) respects your
            privacy. This Privacy Policy explains what information is collected
            when you use the RealWithin mobile application and related
            services, why it is used, how it is protected, and the choices you
            have regarding your information.
          </Intro>

          <p>
            RealWithin is operated by V. Bance, an individual developer trading as
            RealWithin. For data-protection purposes, V. Bance is the controller
            of personal information processed through RealWithin.
          </p>

          <p>
            RealWithin is designed to help you reflect on your experiences and
            recognise patterns and changes in what you have shared over time.
            RealWithin is not a medical service, therapy service, diagnostic
            tool or substitute for professional care.
          </p>

          <Section title="1. Information We Collect">
            <Subheading>Account information</Subheading>

            <p>When you create an account, we may collect information such as:</p>

            <List
              items={[
                "your name or preferred name;",
                "your email address;",
                "your account identifier; and",
                "information required to authenticate and maintain your account.",
              ]}
            />

            <p>
              Passwords are handled through our authentication provider and are
              not available to RealWithin in plain text.
            </p>

            <Subheading>Reflections and check-ins</Subheading>

            <p>When you use RealWithin, you may voluntarily provide:</p>

            <List
              items={[
                "a selected feeling;",
                "short written reflections or journal text;",
                "check-in information; and",
                "other information you choose to include in a reflection.",
              ]}
            />

            <p>
              Because reflections are written freely by you, they may sometimes
              contain personal or sensitive information. You control what you
              choose to write.
            </p>

            <Subheading>Information created from your reflections</Subheading>

            <p>
              RealWithin may process your reflections to create information
              intended to help you understand what you have shared over time.
              This can include:
            </p>

            <List
              items={[
                "reflections and Insights;",
                "recurring Patterns;",
                "Memory comparisons between earlier and later reflections;",
                "You recognitions;",
                "emotional, pattern, memory and identity signals used internally to produce these features; and",
                "artwork associated with a You recognition.",
              ]}
            />

            <p>
              These outputs are generated from information you have provided
              and may not always be accurate. They should be treated as
              reflective observations rather than facts, professional
              assessments or diagnoses.
            </p>

            <Subheading>Trial and subscription information</Subheading>

            <p>
              When you start a RealWithin trial or purchase a RealWithin
              subscription, information about your trial, subscription status
              and entitlement may be processed through our subscription
              infrastructure.
            </p>

            <p>
              RealWithin does not directly receive or store your complete
              payment-card details. Paid subscriptions are processed through
              the relevant app marketplace and subscription infrastructure.
            </p>

            <Subheading>Notification information and preferences</Subheading>

            <p>If you enable notifications, RealWithin may process:</p>

            <List
              items={[
                "your notification preferences;",
                "your chosen Reflection reminder settings;",
                "a device push-notification token used to deliver notifications; and",
                "information needed to determine whether a Pattern, Memory or You notification should be sent.",
              ]}
            />

            <p>RealWithin may send notifications when:</p>

            <List
              items={[
                "your daily Reflection reminder is due;",
                "a new Pattern is discovered;",
                "a new Memory is created;",
                "a new You recognition is available; or",
                "another notification you have chosen to receive is relevant.",
              ]}
            />

            <p>
              RealWithin aims to avoid displaying sensitive details from your
              reflections or generated insights in notification previews.
            </p>

            <p>
              You can change your notification preferences in RealWithin or
              disable notifications through your device settings.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use information collected through RealWithin to:</p>

            <List
              items={[
                "create and maintain your account;",
                "provide your daily reflection;",
                "generate Patterns, Memory and You features where available;",
                "generate associated artwork;",
                "remember information needed to provide your experience across sessions;",
                "synchronise your RealWithin information across supported sessions or devices;",
                "determine whether you have access to Premium features;",
                "provide notifications you have chosen to receive;",
                "maintain, secure and troubleshoot the service; and",
                "respond to support, privacy and account-deletion requests.",
              ]}
            />

            <p>
              We do not use RealWithin to make medical diagnoses or clinical
              decisions about you.
            </p>
          </Section>

          <Section title="3. Artificial Intelligence">
            <p>
              RealWithin uses artificial intelligence to help generate some
              reflections and other features from information you provide.
            </p>

            <p>
              Relevant information from your reflections may therefore be
              processed by an AI service provider in order to generate the
              requested RealWithin feature.
            </p>

            <p>RealWithin currently uses OpenAI API services for this processing.</p>

            <p>
              According to OpenAI&apos;s policies for its API and business
              products, API inputs and outputs are not used to train
              OpenAI&apos;s models by default unless the customer explicitly
              opts in to data sharing.
            </p>

            <p>
              AI-generated content can be incomplete or incorrect.
              RealWithin&apos;s outputs are intended for personal reflection
              and should not be considered professional, medical,
              psychological or therapeutic advice.
            </p>
          </Section>

          <Section title="4. Service Providers">
            <p>
              We use third-party service providers where necessary to operate
              RealWithin.
            </p>

            <Provider
              name="Supabase"
              text="used for services including account authentication, database functionality, synchronisation and storage."
            />

            <Provider
              name="OpenAI"
              text="used to process information required to generate AI-assisted RealWithin features."
            />

            <Provider
              name="RevenueCat"
              text="used to help manage subscription status, purchases and Premium entitlement."
            />

            <Provider
              name="Expo"
              text="used to support the delivery of push notifications through the Expo Push Service."
            />

            <Provider
              name="Apple and Google"
              text="used, where applicable, to distribute RealWithin, process in-app purchases through their respective marketplaces, and deliver device notifications through Apple Push Notification service (APNs) or Firebase Cloud Messaging (FCM)."
            />

            <p>
              These providers may process information according to their own
              privacy terms and our arrangements with them.
            </p>

            <p>We do not sell your reflections or personal information to advertisers.</p>
          </Section>

          <Section title="5. Your Reflections and Sensitive Information">
            <p>
              RealWithin is designed around personal reflection. You may choose
              to write about relationships, emotions, health, difficult
              experiences, beliefs, sexuality or other private matters.
            </p>

            <p>
              Information you choose to include may therefore sometimes contain
              information that data-protection law treats as special-category
              or particularly sensitive personal information.
            </p>

            <p>
              RealWithin does not require you to include any particular type of
              sensitive information. You control what you choose to share in
              your reflections.
            </p>

            <p>
              During account creation, RealWithin asks for your separate,
              explicit consent to process special-category information that you
              choose to provide where that processing is needed to provide
              Reflections, Patterns, Memory and You.
            </p>

            <p>
              Agreeing to RealWithin&apos;s Terms of Use does not itself provide
              this consent.
            </p>

            <p>
              You may withdraw this consent at any time through
              RealWithin&apos;s Settings or by contacting <EmailLink />.
              Withdrawal does not affect processing that took place lawfully
              before consent was withdrawn. If you withdraw consent, some
              reflection and understanding features may no longer be available
              while that consent remains withdrawn.
            </p>
          </Section>

          <Section title="6. Data Storage and Security">
            <p>
              We use technical and organisational measures intended to protect
              your information against unauthorised access, loss, misuse or
              alteration.
            </p>

            <p>
              Cloud information associated with RealWithin accounts is stored
              using our service infrastructure, including Supabase.
            </p>

            <p>
              Some information may also be stored locally on your device to
              allow RealWithin to function correctly.
            </p>

            <p>
              No electronic storage or transmission method can be guaranteed to
              be completely secure, and we cannot promise absolute security.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We keep account and RealWithin information for as long as
              reasonably necessary to provide the Service, maintain your account
              and meet legitimate legal, security or regulatory requirements.
            </p>

            <p>
              If you delete your account, we will delete or initiate deletion
              of personal information associated with your account, except where
              limited information must be retained for legitimate legal,
              security, fraud-prevention or regulatory purposes.
            </p>

            <p>
              Ending a trial or paid subscription does not by itself delete
              your RealWithin account or previously generated content. Existing
              content may remain stored and available to you on a read-only
              basis until you delete your account or it is otherwise deleted in
              accordance with this Privacy Policy.
            </p>

            <p>
              Information may also be retained for a limited period where
              necessary to complete deletion processes, maintain system security
              or comply with applicable law.
            </p>
          </Section>

          <Section title="8. Account and Data Deletion">
            <p>
              You may delete your RealWithin account and associated information
              through the account-deletion option provided in RealWithin&apos;s
              Settings.
            </p>

            <p>
              You may also find account-deletion information and instructions
              on our{" "}
              <Link
                href="/delete-account"
                className="font-medium text-[#617166] underline underline-offset-4"
              >
                account-deletion page
              </Link>{" "}
              or contact{" "}
              <EmailLink />.
            </p>

            <p>
              Deleting the RealWithin application from your device does not
              delete your RealWithin account.
            </p>

            <p>
              Deleting your RealWithin account does not necessarily cancel an
              active Apple App Store or Google Play subscription. If applicable,
              you should separately manage or cancel your subscription through
              the relevant marketplace or through the subscription-management
              options provided by RealWithin.
            </p>

            <p>
              When an account is deleted, information associated with that
              account will be deleted or scheduled for deletion from our
              systems and relevant service providers as appropriate, subject to
              any legitimate retention requirements described in this Privacy
              Policy.
            </p>
          </Section>

          <Section title="9. Your Rights">
            <p>
              Depending on where you live, including if you are located in the
              European Economic Area or United Kingdom, you may have rights
              concerning your personal information.
            </p>

            <p>These may include the right to:</p>

            <List
              items={[
                "request access to personal information we hold about you;",
                "request correction of inaccurate information;",
                "request deletion of your information;",
                "restrict or object to certain processing;",
                "request portability of certain information; and",
                "withdraw consent at any time where processing is based on consent, including explicit consent used for special-category information.",
              ]}
            />

            <p>
              You may contact us at <EmailLink /> to exercise an applicable
              privacy right.
            </p>

            <p>
              You may also have the right to complain to your local
              data-protection authority.
            </p>
          </Section>

          <Section title="10. Legal Bases for Processing">
            <p>
              Where data-protection law requires us to identify a legal basis
              for processing personal information, we may rely on:
            </p>

            <List
              items={[
                "performance of our agreement with you where processing is necessary to provide RealWithin;",
                "your consent where processing is based on consent;",
                "our legitimate interests in operating, securing and maintaining RealWithin, where those interests are not overridden by your rights;",
                "compliance with legal obligations; and",
                "where information you choose to provide contains special-category personal information, your explicit consent as the applicable special-category processing condition.",
              ]}
            />
          </Section>

          <Section title="11. International Processing">
            <p>
              Our service providers may process information in countries other
              than the country where you live.
            </p>

            <p>
              Where required, appropriate safeguards will be used for
              international transfers of personal information in accordance
              with applicable data-protection law.
            </p>
          </Section>

          <Section title="12. Children">
            <p>RealWithin is not intended for children under 13.</p>

            <p>
              If local law requires a higher minimum age for a person to consent
              to the processing of their personal information, that higher age
              may apply.
            </p>

            <p>
              If we learn that personal information from a child has been
              collected contrary to applicable requirements, we will take
              appropriate steps to delete it.
            </p>

            <p>
              Parents or guardians who believe a child has provided information
              improperly may contact <EmailLink />.
            </p>
          </Section>

          <Section title="13. Notifications">
            <p>
              RealWithin may send optional notifications if you have granted
              notification permission and enabled the relevant notification
              settings.
            </p>

            <p>These may include:</p>

            <List
              items={[
                "daily Reflection reminders;",
                "notifications when a new Pattern is discovered;",
                "notifications when a new Memory is created;",
                "notifications when a new You recognition becomes available; and",
                "other service-related notifications you choose to receive.",
              ]}
            />

            <p>
              RealWithin aims to avoid displaying sensitive details from your
              reflections or generated insights in notification previews.
            </p>

            <p>
              You can change your notification preferences in RealWithin or
              disable notifications through your device settings.
            </p>
          </Section>

          <Section title="14. Sharing">
            <p>
              RealWithin may allow you to voluntarily share certain content,
              such as a You recognition image, using your device&apos;s sharing
              functionality.
            </p>

            <p>
              Sharing is initiated by you. Once you share content outside
              RealWithin, the recipient or third-party service you choose may
              process that content according to its own terms and privacy
              practices.
            </p>
          </Section>

          <Section title="15. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy as RealWithin develops, our
              service providers change, or legal requirements change.
            </p>

            <p>
              When we make changes, we will update the “Last updated” date
              above. Where required, we will provide additional notice of
              significant changes.
            </p>
          </Section>

          <Section title="16. Contact">
            <p>
              For questions about this Privacy Policy, your personal
              information, account deletion or other privacy matters, contact:
            </p>

            <p className="font-medium text-[#414641]">
              RealWithin
              <br />
              V. Bance, trading as RealWithin
              <br />
              <EmailLink />
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-[#ded8cc]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#303430]">
            <span className="absolute inset-y-0 right-0 w-1/2 bg-[#303430]" />
          </span>
          <span className="font-serif text-2xl text-[#292d29]">RealWithin</span>
        </Link>

        <nav className="flex gap-5 text-sm text-[#737872]">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ded8cc]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-9 text-sm text-[#777c76] sm:flex-row sm:justify-between sm:px-10">
        <p>© 2026 RealWithin</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
          <Link href="/delete-account">Delete account</Link>
        </div>
      </div>
    </footer>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold tracking-tight text-[#3f443f]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-2 text-lg font-semibold text-[#4a504a]">{children}</h3>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Intro({ children }: { children: React.ReactNode }) {
  return <p className="text-xl leading-9 text-[#555b55]">{children}</p>;
}

function Provider({ name, text }: { name: string; text: string }) {
  return (
    <p>
      <strong className="text-[#414641]">{name}</strong> — {text}
    </p>
  );
}

function EmailLink() {
  return (
    <a
      href="mailto:support@realwithin.com"
      className="font-medium text-[#617166] underline underline-offset-4"
    >
      support@realwithin.com
    </a>
  );
}