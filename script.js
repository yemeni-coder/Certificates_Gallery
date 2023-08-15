const certificates = [
    { image: 'images/certificate 1.png', description: 'INVENTORY MANAGEMENT CERTIFICATE ' },
    { image: 'images/certificate 2.png', description: 'PRESENTING DATA CERTIFICATE' },
    { image: 'images/certificate 3.png', description: 'IT FOR BUSINESS SUCCESS CERTIFICATE ' },
    { image: 'images/certificate 4.png', description: 'EFFECTIVE PRESENTATIONS CERTIFICATE' },
    { image: 'images/certificate 5.png', description: 'SOFTWARE ENGINEERING VIRTUAL EXPERIENCE PROGRAMME CERTIFICATE' },
    { image: 'images/certificate 6.png', description: 'INTRODUCTION TO CYBER SECURITY CERTIFICATE' },
    { image: 'images/certificate 7.png', description: 'INTRODUCTION TO PHP CERTIFICATE ' },
    { image: 'images/certificate 9.png', description: ' DATA VISUALISATION: EMPOWERING BUSINESS WITH EFFECTIVE INSIGHTS CERTIFICATE ' },
    { image: 'images/certificate 10.png', description: 'ON-PREMISE SALES VIRTUAL EXPERIENCE PROGRAM CERTIFICATE' },
    { image: 'images/certificate 11.png', description: ' ONE DAY C CODE CERTIFICATE ' },
    { image: 'images/certificate 12.png', description: ' BECOME A SUCCESSFUL SEO FREELANCER & START ONLINE BUSINESSES CERTIFICATE ' },
    { image: 'images/certificate 13.png', description: ' INTRO TO CHAT GPT THE ESSENTIAL SKILLS FOR GETTING STARTED CERTIFICATE ' },
    { image: 'images/certificate 14.png', description: 'BACK-END ENGINEERING VIRTUAL EXPERIENCE PROGRAM CERTIFICATE ' },
    { image: 'images/certificate 15.png', description: ' BASICS OF SNAPCHAT MARKETING CERTIFICATE ' },
    { image: 'images/certificate 16.png', description: ' JAVA SCRIPT FOR BEGINNERS CERTIFICATE ' },
    { image: 'images/certificate 17.png', description: ' BUSINESS COMMUNICATIONS CERTIFICATE ' },
    { image: 'images/certificate 18.png', description: ' INTRODUCTION TO DIGITAL BUSINESS SKILLS CERTIFICATE ' },
    { image: 'images/certificate 19.png', description: ' MARKETING COMMUNICATIONS IN THE DIGITAL AGE CERTIFICATE' },




    // Add more certificates with descriptions
  ];
  
  const certificatesContainer = document.querySelector('.certificates');
  
  certificates.forEach((certificate, index) => {
    const certificateDiv = document.createElement('div');
    certificateDiv.classList.add('certificate');
    certificateDiv.style.backgroundImage = `url('${certificate.image}')`;
  
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('certificate__description');
    descriptionDiv.textContent = certificate.description;
  
    certificateDiv.appendChild(descriptionDiv);
  
    certificateDiv.addEventListener('click', () => openCertificateModal(certificate));
  
    certificatesContainer.appendChild(certificateDiv);
  });
  
  function openCertificateModal(certificate) {
    const modal = document.getElementById('certificateModal');
    const modalContent = document.getElementById('modalContent');
    const modalDescription = document.getElementById('modalDescription');
    modalContent.src = certificate.image;
    modalDescription.textContent = certificate.description;
    modal.style.display = 'block';
  
    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  