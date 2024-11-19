import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Image
          src="/images/profile-photo.jpg"
          alt="Profile Photo"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Google Cloud Certified: Digital Leader / Associate Engineer /
              Professional Architect
            </li>
            <li>Microsoft Azure Certified: Azure Fundamentals</li>
            <li>Scrum Master Certified by Scrum.org</li>
            <li>Java Certifications by UTN Buenos Aires & Banco Pichincha</li>
            <li>English C2 Proficient Certificated by EF SET</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Career Overview</h2>
        <p className="text-lg">
          My career has spanned various sectors, including government,
          healthcare, and banking. My current role as a security expert for
          Ecuador&#39;s largest private bank highlights my proficiency in
          handling sensitive, large-scale projects.
        </p>
        <p className="text-lg">
          My academic roots as a researcher at the Universidad Nacional de San
          Luis reflect my deep commitment to continuous learning and knowledge
          sharing.
        </p>
        <p className="text-lg">
          This passion for education also is the foundation of my{" "}
          <a
            href="https://pollito.dev/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            programming blog.
          </a>{" "}
          There, I dive into the intricacies of web development (mainly in Java
          Spring Boot).
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">A Note of Gratitude</h2>
        <p className="text-lg" lang="uk">
          Дорога Єлизавета, Хоча я ще плутаю букви та звуки твоєї мови, я
          повністю налаштований її вивчити, щоб ми могли їхати в метро,
          пліткуючи про людей, не надто переймаючись, що нас зрозуміють, хаха.
          Дякую за твою підтримку, і сподіваюся, що наші прагнення та цілі
          здійсняться швидше, ніж очікується. А до того часу ти можеш на мене
          розраховувати.
        </p>
      </div>
    </div>
  );
}
