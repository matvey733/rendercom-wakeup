setInterval(async () => {
    const startTime = Date.now();

    await fetch("https://artstation-share.onrender.com");

    const endTime = Date.now();
    const timeDiffInSecs = (endTime - startTime) / 1000;

    const now = new Date();
    const currTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    console.log(`[${ now.toDateString() } ${currTime}] ${ timeDiffInSecs }s`);
}, 300000);