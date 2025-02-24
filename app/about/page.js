import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        margin: 0,
        padding: 0,
      }}
    >
      <header style={styles.header}>
        <h1 style={styles.title}>My Online CV</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link href="page.js">
                <span style={styles.navLink}>About Me</span>
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link href="/skills">
                <span style={styles.navLink}>Skills</span>
              </Link>
            </li>

            <li style={styles.navItem}>
              <Link href="/portofolio">
                <span style={styles.navLink}>Portfolio</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main style={styles.main}>
        {/* About Section */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.profileContainer}>
            <Image
              src="/images/photo.jpg" // Path to your profile image
              alt="Profile Picture"
              width={150}
              height={150}
              style={styles.profileImage}
            />
            <p style={styles.aboutText}>
              Hi, I`m Helga Puspa C.A, a passionate web developer with a love
              for creating user-friendly websites and applications. With [X]
              years of experience in building web solutions, I strive to make
              the web a more interactive and accessible place.
            </p>
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              style={styles.icon}
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              style={styles.icon}
            >
              <FaGithub size={30} />
            </a>
            <a href="mailto:your-email@example.com" style={styles.icon}>
              <FaEnvelope size={30} />
            </a>
          </div>
          <p>© 2025 Your Name. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 10, // Keeps the navbar above other sections
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
  main: {
    padding: "80px 20px 20px", // Adds padding at the top for the fixed navbar
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // This now correctly matches one of the allowed values
  },
  profileImage: {
    borderRadius: "50%",
    marginBottom: "20px",
  },
  aboutText: {
    fontSize: "16px",
    maxWidth: "600px",
    textAlign: "center",
    margin: "0 auto",
  },
  skillsList: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
  },
  service: {
    marginBottom: "20px",
  },
  portfolioItem: {
    marginBottom: "20px",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    minHeight: "150px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  socialIcons: {
    marginBottom: "10px",
  },
  icon: {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
  },
};
