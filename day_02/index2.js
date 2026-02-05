const readFile = async (filePath) => {
    try {
        const response = await fetch(filePath);
    } catch (error) {
        console.log("error occured: " + error);
    }
}
