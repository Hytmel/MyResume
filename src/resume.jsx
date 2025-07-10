import React from "react";

const CV = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "20px auto",
      background: "white",
      boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    sidebar: {
      backgroundColor: "#2c3e50",
      color: "white",
      width: "35%",
      padding: "40px 30px",
    },
    mainContent: {
      flex: 1,
      padding: "40px",
    },
    name: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      letterSpacing: "2px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "300",
      marginBottom: "30px",
      letterSpacing: "1px",
    },
    sectionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "15px",
      marginTop: "30px",
      letterSpacing: "1px",
    },
    mainSectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px",
      marginTop: "30px",
      letterSpacing: "1px",
      color: "#2c3e50",
    },
    contactInfo: {
      marginBottom: "25px",
    },
    contactItem: {
      marginBottom: "8px",
      fontSize: "14px",
      wordBreak: "break-word",
    },
    skillsList: {
      listStyle: "none",
      padding: 0,
    },
    skillItem: {
      marginBottom: "8px",
      fontSize: "14px",
    },
    experienceItem: {
      marginBottom: "25px",
    },
    jobTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    company: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "5px",
    },
    date: {
      fontSize: "12px",
      color: "#888",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    description: {
      fontSize: "14px",
      lineHeight: "1.5",
    },
    descriptionList: {
      marginLeft: "20px",
    },
    descriptionItem: {
      marginBottom: "5px",
    },
    achievementsText: {
      fontSize: "14px",
      lineHeight: "1.6",
      textAlign: "justify",
    },
    firstSection: {
      marginTop: "0",
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "#f5f5f5",
      color: "#333",
    },
    // Large Desktop (1400px and above)
    "@media (min-width: 1400px)": {
      container: {
        maxWidth: "1400px",
        margin: "30px auto",
      },
      sidebar: {
        padding: "50px 40px",
      },
      mainContent: {
        padding: "50px",
      },
      name: {
        fontSize: "32px",
      },
      title: {
        fontSize: "18px",
      },
      sectionTitle: {
        fontSize: "16px",
      },
      mainSectionTitle: {
        fontSize: "20px",
      },
      contactItem: {
        fontSize: "15px",
      },
      skillItem: {
        fontSize: "15px",
      },
      jobTitle: {
        fontSize: "18px",
      },
      company: {
        fontSize: "15px",
      },
      description: {
        fontSize: "15px",
      },
    },
    // Desktop (1024px to 1399px)
    "@media (max-width: 1399px) and (min-width: 1024px)": {
      container: {
        maxWidth: "1000px",
        margin: "25px auto",
      },
      sidebar: {
        padding: "35px 25px",
      },
      mainContent: {
        padding: "35px",
      },
    },
    // Tablet (768px to 1023px)
    "@media (max-width: 1023px) and (min-width: 769px)": {
      container: {
        maxWidth: "95%",
        margin: "15px auto",
      },
      sidebar: {
        width: "40%",
        padding: "30px 20px",
      },
      mainContent: {
        padding: "30px 25px",
      },
      name: {
        fontSize: "26px",
      },
      title: {
        fontSize: "15px",
      },
      sectionTitle: {
        fontSize: "13px",
      },
      mainSectionTitle: {
        fontSize: "17px",
      },
    },
    // Mobile (481px to 768px)
    "@media (max-width: 768px) and (min-width: 481px)": {
      container: {
        flexDirection: "column",
        margin: "5px",
        minHeight: "auto",
      },
      sidebar: {
        width: "100%",
        padding: "25px 20px",
        order: 1,
      },
      mainContent: {
        padding: "25px 20px",
        order: 2,
      },
      name: {
        fontSize: "26px",
        textAlign: "center",
        marginBottom: "8px",
      },
      title: {
        fontSize: "15px",
        textAlign: "center",
        marginBottom: "25px",
      },
      sectionTitle: {
        fontSize: "16px",
        marginBottom: "12px",
        marginTop: "25px",
        textAlign: "center",
      },
      mainSectionTitle: {
        fontSize: "20px",
        marginBottom: "15px",
        marginTop: "25px",
        textAlign: "center",
      },
      contactInfo: {
        marginBottom: "20px",
      },
      contactItem: {
        marginBottom: "10px",
        fontSize: "15px",
        textAlign: "center",
      },
      skillItem: {
        marginBottom: "10px",
        fontSize: "15px",
        textAlign: "center",
      },
      experienceItem: {
        marginBottom: "20px",
        padding: "15px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      },
      jobTitle: {
        fontSize: "17px",
        marginBottom: "8px",
      },
      company: {
        fontSize: "15px",
        marginBottom: "8px",
      },
      date: {
        fontSize: "13px",
        marginBottom: "12px",
      },
      description: {
        fontSize: "15px",
        lineHeight: "1.6",
      },
    },
    // Small Mobile (320px to 480px)
    "@media (max-width: 480px) and (min-width: 321px)": {
      container: {
        margin: "2px",
      },
      sidebar: {
        padding: "20px 15px",
      },
      mainContent: {
        padding: "20px 15px",
      },
      name: {
        fontSize: "24px",
      },
      title: {
        fontSize: "14px",
      },
      sectionTitle: {
        fontSize: "15px",
      },
      mainSectionTitle: {
        fontSize: "18px",
      },
      contactItem: {
        fontSize: "14px",
      },
      skillItem: {
        fontSize: "14px",
      },
      jobTitle: {
        fontSize: "16px",
      },
      company: {
        fontSize: "14px",
      },
      description: {
        fontSize: "14px",
      },
    },
    // Extra Small Mobile (below 320px)
    "@media (max-width: 320px)": {
      container: {
        margin: "1px",
      },
      sidebar: {
        padding: "15px 10px",
      },
      mainContent: {
        padding: "15px 10px",
      },
      name: {
        fontSize: "22px",
      },
      title: {
        fontSize: "13px",
      },
      sectionTitle: {
        fontSize: "14px",
      },
      mainSectionTitle: {
        fontSize: "16px",
      },
      contactItem: {
        fontSize: "13px",
      },
      skillItem: {
        fontSize: "13px",
      },
      jobTitle: {
        fontSize: "15px",
      },
      company: {
        fontSize: "13px",
      },
      description: {
        fontSize: "13px",
      },
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <div style={styles.name}>Hayat Mellal</div>
          <div style={styles.title}>Software Engineering Student / Frontend Developer</div>

          <div style={styles.sectionTitle}>CONTACT</div>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>hayatttt1111@gmail.com</div>
            <div style={styles.contactItem}>+213 696 825 204</div>
            <div style={styles.contactItem}>Tissemsilt, Algeria</div>
            <div style={styles.contactItem}>
              <a href="https://www.linkedin.com/in/mellal-hayat-05bb11361/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
                LinkedIn: mellal-hayat-05bb11361
              </a>
            </div>
            <div style={styles.contactItem}>
              <a href="https://hytmel.github.io/hayatdev-portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
                Portfolio: hytmel.github.io/hayatdev-portfolio/
              </a>
            </div>
          </div>

          <div style={styles.sectionTitle}>TECHNICAL SKILLS</div>
          <ul style={styles.skillsList}>
            <li style={styles.skillItem}>Java</li>
            <li style={styles.skillItem}>JavaScript</li>
            <li style={styles.skillItem}>HTML & CSS</li>
            <li style={styles.skillItem}>React.js</li>
            <li style={styles.skillItem}>Flutter & Dart</li>
            <li style={styles.skillItem}>GitHub</li>
            <li style={styles.skillItem}>Postman</li>
          </ul>

          <div style={styles.sectionTitle}>LANGUAGES</div>
          <ul style={styles.skillsList}>
            <li style={styles.skillItem}>Arabic (Native)</li>
            <li style={styles.skillItem}>English (Fluent)</li>
            <li style={styles.skillItem}>French (Basic)</li>
          </ul>
        </div>

        <div style={styles.mainContent}>
          <div style={{ ...styles.mainSectionTitle, ...styles.firstSection }}>
            EDUCATION
          </div>
          <div style={styles.experienceItem}>
            <div style={styles.jobTitle}>Computer Science Engineering</div>
            <div style={styles.company}>
              ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès)
            </div>
            <div style={styles.company}>Sidi Bel Abbès, Algeria</div>
            <div style={styles.date}>2023 - 2025 (Expected)</div>
            <div style={styles.description}>
              Currently in 3rd year, specializing in software development and computer engineering.
            </div>
          </div>

          <div style={styles.mainSectionTitle}>PROFESSIONAL EXPERIENCE</div>

          <div style={styles.experienceItem}>
            <div style={styles.jobTitle}>Flutter Developer</div>
            <div style={styles.company}>GuideMe (2nd year project)</div>
            <div style={styles.date}>2024</div>
            <div style={styles.description}>
              Developed a mobile app as part of a team project in my 2nd year at ESI SBA.
            </div>
          </div>

          <div style={styles.experienceItem}>
            <div style={styles.jobTitle}>React JS Developer</div>
            <div style={styles.company}>NCS Hackathon (ECO-DZ project)</div>
            <div style={styles.date}>2025</div>
            <div style={styles.description}>
              Built the admin dashboard for our project app ECO-DZ during a 4-day hackathon.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
