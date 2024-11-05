import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-brightGreen text-2xl mb-4 font-terminal">Contact Us</h2>
      <div className="bg-darkBackground text-terminalWhite p-4 border border-brightGreen font-terminal">
        <p>
          For any inquiries, questions, or feedback, feel free to reach out to us via email at:
        </p>
        <p className="mt-4 text-brightGreen">
          <a href="mailto:zach@zernel.org">zach@zernel.org</a>
        </p>
        <p className="mt-4">
          We look forward to hearing from you and are happy to provide more information about the Zernel project.
        </p>
      </div>
    </section>
  );
};

export default Contact;

