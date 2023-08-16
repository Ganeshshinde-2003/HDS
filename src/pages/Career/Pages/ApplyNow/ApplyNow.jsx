import React, { useState } from 'react';
import styles from './style.module.css';

function ApplyNow() {
  const [resumeFile, setResumeFile] = useState(null);
  const [phone, setPhone] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setResumeFile(selectedFile);
  };

  const handlePhoneChange = (event) => {
    const inputPhone = event.target.value;
    setPhone(inputPhone);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form action="">
          <div className={styles.name}>
            <input type="text" required placeholder="First Name" />
            <input type="text" required placeholder="Last Name" />
          </div>
          <input type="email" required placeholder="Email" />
          <input
            type="text"
            required
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
            pattern="[0-9()-\s]+"
          />
          <div className={styles.resume}>
            <div className={styles.resumename}>Resume/CV</div>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              capture="Upload File"
              required
            />
          </div>
          <input type="text" required placeholder="Portfolio Link" />
          <textarea type="text" rows="7" cols="10" placeholder='Personal Note' />
          <button className={styles.button}>SUBMIT APPLICATION</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyNow;
