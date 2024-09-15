function downloadCVs() {
    // Array of file URLs
    const cvFiles = [
        "path/to/cv1.jpg",
        "path/to/cv2.jpg"
    ];

    // Loop through each file and trigger download
    cvFiles.forEach(function(file, index) {
        const link = document.createElement('a');
        link.href = file;
        link.download = `Asmin-CV-${index + 1}.jpg`;  // Dynamically setting the name for each file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}