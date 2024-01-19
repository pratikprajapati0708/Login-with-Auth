//convert image into base64

export function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        // Create a new FileReader instance
        const fileReader = new FileReader();

        // Read the file as a data URL (base64)
        fileReader.readAsDataURL(file);

        // When the read operation is successfully completed
        fileReader.onload = () => {
            // Resolve the Promise with the base64 result
            resolve(fileReader.result);
        }

        // If there's an error during the read operation
        fileReader.onerror = (error) => {
            // Reject the Promise with the error
            reject(error);
        }
    });
}
