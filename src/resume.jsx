import React from "react";

const CV = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      padding: "8px",
      "@media (min-width: 640px)": {
        padding: "16px",
      },
      "@media (min-width: 1024px)": {
        padding: "24px",
      },
    },
    wrapper: {
      maxWidth: "1152px",
      margin: "0 auto",
      backgroundColor: "white",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      borderRadius: "8px",
      overflow: "hidden",
      animation: "fadeIn 0.8s ease-in-out",
    },
    desktopLayout: {
      display: "none",
      minHeight: "100vh",
      "@media (min-width: 768px)": {
        display: "flex",
      },
    },
    sidebar: {
      width: "40%",
      backgroundColor: "#1e293b",
      color: "white",
      padding: "24px",
      "@media (min-width: 1024px)": {
        width: "33.333333%",
        padding: "32px",
      },
      "@media (min-width: 1280px)": {
        padding: "40px",
      },
    },
    sidebarContent: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    profileSection: {
      textAlign: "center",
    },
    profileName: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "8px",
      letterSpacing: "0.025em",
      "@media (min-width: 1024px)": {
        fontSize: "30px",
      },
      "@media (min-width: 1280px)": {
        fontSize: "36px",
      },
    },
    profileTitle: {
      fontSize: "14px",
      fontWeight: "300",
      letterSpacing: "0.025em",
      color: "#d1d5db",
      "@media (min-width: 1024px)": {
        fontSize: "16px",
      },
      "@media (min-width: 1280px)": {
        fontSize: "18px",
      },
    },
    sectionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "12px",
      letterSpacing: "0.025em",
      borderBottom: "1px solid #4b5563",
      paddingBottom: "8px",
      "@media (min-width: 1024px)": {
        fontSize: "16px",
      },
    },
    contactList: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontSize: "14px",
      "@media (min-width: 1024px)": {
        fontSize: "16px",
      },
    },
    contactItem: {
      wordBreak: "break-words",
    },
    link: {
      color: "#93c5fd",
      textDecoration: "underline",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#bfdbfe",
    },
    skillsList: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontSize: "14px",
      "@media (min-width: 1024px)": {
        fontSize: "16px",
      },
    },
    skillItem: {
      display: "flex",
      alignItems: "center",
    },
    skillDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#60a5fa",
      borderRadius: "50%",
      marginRight: "12px",
    },
    languageDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#4ade80",
      borderRadius: "50%",
      marginRight: "12px",
    },
    mainContent: {
      flex: 1,
      padding: "24px",
      "@media (min-width: 1024px)": {
        padding: "32px",
      },
      "@media (min-width: 1280px)": {
        padding: "40px",
      },
    },
    mainSections: {
      display: "flex",
      flexDirection: "column",
      gap: "32px",
    },
    section: {
      animation: "slideIn 0.8s ease-in-out",
    },
    mainSectionTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "24px",
      color: "#1e293b",
      borderBottom: "2px solid #1e293b",
      paddingBottom: "8px",
      "@media (min-width: 1024px)": {
        fontSize: "24px",
      },
      "@media (min-width: 1280px)": {
        fontSize: "30px",
      },
    },
    card: {
      backgroundColor: "#f9fafb",
      padding: "24px",
      borderRadius: "8px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#1e293b",
      "@media (min-width: 1024px)": {
        fontSize: "20px",
      },
    },
    cardSubtitle: {
      color: "#4b5563",
      marginBottom: "4px",
      fontWeight: "500",
    },
    cardLocation: {
      color: "#4b5563",
      marginBottom: "8px",
    },
    cardDate: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#374151",
      marginBottom: "12px",
      "@media (min-width: 1024px)": {
        fontSize: "16px",
      },
    },
    cardDescription: {
      color: "#374151",
      lineHeight: "1.6",
    },
    experienceSection: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    mobileLayout: {
      display: "block",
      "@media (min-width: 768px)": {
        display: "none",
      },
    },
    mobileHeader: {
      backgroundColor: "#1e293b",
      color: "white",
      padding: "24px",
      textAlign: "center",
    },
    mobileHeaderTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "8px",
      letterSpacing: "0.025em",
    },
    mobileHeaderSubtitle: {
      fontSize: "14px",
      fontWeight: "300",
      letterSpacing: "0.025em",
      color: "#d1d5db",
    },
    mobileContent: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    mobileCard: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      padding: "16px",
    },
    mobileCardTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "12px",
      color: "#1e293b",
      borderBottom: "1px solid #e5e7eb",
      paddingBottom: "8px",
    },
    mobileContactList: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontSize: "14px",
    },
    mobileSkillsGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
      fontSize: "14px",
    },
    mobileSkillItem: {
      display: "flex",
      alignItems: "center",
    },
    mobileSkillDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#60a5fa",
      borderRadius: "50%",
      marginRight: "8px",
    },
    mobileLanguageDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#4ade80",
      borderRadius: "50%",
      marginRight: "8px",
    },
    mobilePostmanSkill: {
      gridColumn: "span 2",
    },
    mobileLanguagesList: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontSize: "14px",
    },
    mobileEducationContent: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    mobileEducationTitle: {
      fontWeight: "bold",
      color: "#1e293b",
    },
    mobileEducationSubtitle: {
      fontSize: "14px",
      color: "#4b5563",
    },
    mobileEducationDate: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#374151",
    },
    mobileEducationDescription: {
      fontSize: "14px",
      color: "#374151",
      lineHeight: "1.6",
    },
    mobileExperienceContent: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    mobileExperienceItem: {
      borderLeft: "4px solid #60a5fa",
      paddingLeft: "16px",
    },
    mobileExperienceTitle: {
      fontWeight: "bold",
      color: "#1e293b",
    },
    mobileExperienceSubtitle: {
      fontSize: "14px",
      color: "#4b5563",
    },
    mobileExperienceDate: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#374151",
      marginBottom: "8px",
    },
    mobileExperienceDescription: {
      fontSize: "14px",
      color: "#374151",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Desktop Layout */}
        <div style={styles.desktopLayout}>
          {/* Sidebar */}
          <div style={styles.sidebar}>
            <div style={styles.sidebarContent}>
              <div style={styles.profileSection}>
                <h1 style={styles.profileName}>Hayat Mellal</h1>
                <p style={styles.profileTitle}>
                  Software Engineering Student / Frontend Developer
                </p>
              </div>

              <div>
                <h2 style={styles.sectionTitle}>CONTACT</h2>
                <div style={styles.contactList}>
                  <div style={styles.contactItem}>hayatttt1111@gmail.com</div>
                  <div>+213 696 825 204</div>
                  <div>Tissemsilt, Algeria</div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/mellal-hayat-05bb11361/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.link}
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://hytmel.github.io/hayatdev-portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.link}
                    >
                      Portfolio Website
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={styles.sectionTitle}>TECHNICAL SKILLS</h2>
                <ul style={styles.skillsList}>
                  <li style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    Java
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    JavaScript
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    HTML & CSS
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    React.js
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    Flutter & Dart
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    GitHub
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    Postman
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={styles.sectionTitle}>LANGUAGES</h2>
                <ul style={styles.skillsList}>
                  <li style={styles.skillItem}>
                    <span style={styles.languageDot}></span>
                    Arabic (Native)
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.languageDot}></span>
                    English (Fluent)
                  </li>
                  <li style={styles.skillItem}>
                    <span style={styles.languageDot}></span>
                    French (Basic)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div style={styles.mainContent}>
            <div style={styles.mainSections}>
              <div style={styles.section}>
                <h2 style={styles.mainSectionTitle}>EDUCATION</h2>
                <div style={styles.card}>
                  <h3 style={styles.cardTitle}>Computer Science Engineering</h3>
                  <p style={styles.cardSubtitle}>
                    ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès)
                  </p>
                  <p style={styles.cardLocation}>Sidi Bel Abbès, Algeria</p>
                  <p style={styles.cardDate}>2023 - 2025 (Expected)</p>
                  <p style={styles.cardDescription}>
                    Currently in 3rd year, specializing in software development
                    and computer engineering.
                  </p>
                </div>
              </div>

              <div style={styles.section}>
                <h2 style={styles.mainSectionTitle}>PROFESSIONAL EXPERIENCE</h2>
                <div style={styles.experienceSection}>
                  <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Flutter Developer</h3>
                    <p style={styles.cardSubtitle}>
                      GuideMe (2nd year project)
                    </p>
                    <p style={styles.cardDate}>2024</p>
                    <p style={styles.cardDescription}>
                      Developed a mobile app as part of a team project in my 2nd
                      year at ESI SBA.
                    </p>
                  </div>

                  <div style={styles.card}>
                    <h3 style={styles.cardTitle}>React JS Developer</h3>
                    <p style={styles.cardSubtitle}>
                      NCS Hackathon (ECO-DZ project)
                    </p>
                    <p style={styles.cardDate}>2025</p>
                    <p style={styles.cardDescription}>
                      Built the admin dashboard for our project app ECO-DZ
                      during a 4-day hackathon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div style={styles.mobileLayout}>
          {/* Header */}
          <div style={styles.mobileHeader}>
            <h1 style={styles.mobileHeaderTitle}>Hayat Mellal</h1>
            <p style={styles.mobileHeaderSubtitle}>
              Software Engineering Student / Frontend Developer
            </p>
          </div>

          {/* Content */}
          <div style={styles.mobileContent}>
            {/* Contact */}
            <div style={styles.mobileCard}>
              <h2 style={styles.mobileCardTitle}>CONTACT</h2>
              <div style={styles.mobileContactList}>
                <div style={styles.contactItem}>📧 hayatttt1111@gmail.com</div>
                <div>📱 +213 696 825 204</div>
                <div>📍 Tissemsilt, Algeria</div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/mellal-hayat-05bb11361/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2563eb", textDecoration: "underline" }}
                  >
                    💼 LinkedIn Profile
                  </a>
                </div>
                <div>
                  <a
                    href="https://hytmel.github.io/hayatdev-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2563eb", textDecoration: "underline" }}
                  >
                    🌐 Portfolio Website
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div style={styles.mobileCard}>
              <h2 style={styles.mobileCardTitle}>TECHNICAL SKILLS</h2>
              <div style={styles.mobileSkillsGrid}>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileSkillDot}></span>
                  Java
                </div>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileSkillDot}></span>
                  JavaScript
                </div>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileSkillDot}></span>
                  HTML & CSS
                </div>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileSkillDot}></span>
                  React.js
                </div>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileSkillDot}></span>
                  Flutter & Dart
                </div>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileSkillDot}></span>
                  GitHub
                </div>
                <div
                  style={{
                    ...styles.mobileSkillItem,
                    ...styles.mobilePostmanSkill,
                  }}
                >
                  <span style={styles.mobileSkillDot}></span>
                  Postman
                </div>
              </div>
            </div>

            {/* Languages */}
            <div style={styles.mobileCard}>
              <h2 style={styles.mobileCardTitle}>LANGUAGES</h2>
              <div style={styles.mobileLanguagesList}>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileLanguageDot}></span>
                  Arabic (Native)
                </div>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileLanguageDot}></span>
                  English (Fluent)
                </div>
                <div style={styles.mobileSkillItem}>
                  <span style={styles.mobileLanguageDot}></span>
                  French (Basic)
                </div>
              </div>
            </div>

            {/* Education */}
            <div style={styles.mobileCard}>
              <h2 style={styles.mobileCardTitle}>EDUCATION</h2>
              <div style={styles.mobileEducationContent}>
                <h3 style={styles.mobileEducationTitle}>
                  Computer Science Engineering
                </h3>
                <p style={styles.mobileEducationSubtitle}>
                  ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès)
                </p>
                <p style={styles.mobileEducationSubtitle}>
                  Sidi Bel Abbès, Algeria
                </p>
                <p style={styles.mobileEducationDate}>2023 - 2025 (Expected)</p>
                <p style={styles.mobileEducationDescription}>
                  Currently in 3rd year, specializing in software development
                  and computer engineering.
                </p>
              </div>
            </div>

            {/* Professional Experience */}
            <div style={styles.mobileCard}>
              <h2 style={styles.mobileCardTitle}>PROFESSIONAL EXPERIENCE</h2>
              <div style={styles.mobileExperienceContent}>
                <div style={styles.mobileExperienceItem}>
                  <h3 style={styles.mobileExperienceTitle}>
                    Flutter Developer
                  </h3>
                  <p style={styles.mobileExperienceSubtitle}>
                    GuideMe (2nd year project)
                  </p>
                  <p style={styles.mobileExperienceDate}>2024</p>
                  <p style={styles.mobileExperienceDescription}>
                    Developed a mobile app as part of a team project in my 2nd
                    year at ESI SBA.
                  </p>
                </div>

                <div style={styles.mobileExperienceItem}>
                  <h3 style={styles.mobileExperienceTitle}>
                    React JS Developer
                  </h3>
                  <p style={styles.mobileExperienceSubtitle}>
                    NCS Hackathon (ECO-DZ project)
                  </p>
                  <p style={styles.mobileExperienceDate}>2025</p>
                  <p style={styles.mobileExperienceDescription}>
                    Built the admin dashboard for our project app ECO-DZ during
                    a 4-day hackathon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @media (min-width: 768px) {
            .mobile-only { display: none !important; }
            .desktop-only { display: flex !important; }
          }
          
          @media (max-width: 767px) {
            .mobile-only { display: block !important; }
            .desktop-only { display: none !important; }
          }
        `}
      </style>
    </div>
  );
};

export default CV;
