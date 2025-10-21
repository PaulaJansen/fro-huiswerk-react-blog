function calculateReadTime (content) {
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / 225);
}

export default calculateReadTime;