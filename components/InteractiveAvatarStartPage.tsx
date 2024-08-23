export default function InteractiveAvatarCode() {
  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <img 
          src="https://www.web3.lu/wp-content/uploads/2024/08/avatar.png"
          alt="Local Image" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>
      <div style={styles.column}>
       <h2>Demo Limitations:</h2>
       <ul>
         <li>Up to 3 concurrent sessions are allowed.</li>
         <li>Each session is limited to a maximum of 10 minutes.</li>
         <li>Submitted text should not exceed 1000 words.</li>
       </ul>
      <h2>For Optimal Performance:</h2>
      <ul>
         <li>Use the Chrome browser for the best experience.</li>
         <li>Submit text in multiple languages: English, German, French, Luxembourgish, Chinese, Japanese, Hindi, Korean, Danish, Dutch, Turkish, and more.</li>
         <li>Monitor log messages in the console for important updates.</li>
       </ul>
      </div>
    </div>
  );
};

// Inline styles for simplicity, you could move these to a separate CSS file
const styles = {
  container: {
    display: 'flex',              // Flexbox for the two-column layout
    justifyContent: 'space-between', // Space between the columns
    alignItems: 'center',         // Align items to the center of the container
    gap: '20px',                  // Adds some space between columns
  },
  column: {
    flex: '1 1 50%',              // Each column takes up 50% of the width
    maxWidth: '50%',              // Ensures the columns don't exceed 50% of the width
  },
};

export default EmbeddedComponent;
